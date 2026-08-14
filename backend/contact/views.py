import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import MessageSerializer
from .models import Message, Visit
from django.core.mail import send_mail
from django.conf import settings

logger = logging.getLogger(__name__)


class TrackVisitView(APIView):
    """Handle lightweight, privacy-friendly visitor tracking"""

    def post(self, request, *args, **kwargs):
        try:
            path = str(request.data.get('path', '/'))[:255]
            referrer = str(request.data.get('referrer', ''))[:500] if request.data.get('referrer') else None
            user_agent = request.META.get('HTTP_USER_AGENT', '')[:500] if request.META.get('HTTP_USER_AGENT') else None

            visit = Visit.objects.create(
                path=path or '/',
                referrer=referrer,
                user_agent=user_agent
            )
            return Response({'success': True, 'visit_id': visit.id}, status=status.HTTP_201_CREATED)
        except Exception as e:
            logger.warning(f"Visitor tracking error: {e}")
            return Response({'success': False, 'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class ContactMessageView(APIView):
    """Handle contact form submissions.
    Saves message to database first and attempts email notification without failing if SMTP is offline.
    """

    def get(self, request, *args, **kwargs):
        return Response({
            'status': 'active',
            'endpoint': '/api/contact/',
            'method': 'POST',
            'required_fields': ['name', 'email', 'subject', 'message'],
            'description': 'Submit contact messages via POST. Messages are stored in the database and email notifications are sent.'
        }, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            message = serializer.save()
            
            # Send email notification asynchronously/safely
            email_sent = False
            try:
                if getattr(settings, 'EMAIL_HOST_USER', None) and getattr(settings, 'EMAIL_HOST_PASSWORD', None):
                    subject = f"New Portfolio Contact Message from {message.name}: {message.subject or 'No Subject'}"
                    body = f"Sender Name: {message.name}\nSender Email: {message.email}\nSubject: {message.subject}\n\nMessage:\n{message.body}"
                    recipient = getattr(settings, 'NOTIFICATION_EMAIL', 'younesadir@gmail.com')
                    send_mail(
                        subject,
                        body,
                        settings.DEFAULT_FROM_EMAIL or 'younesadir@gmail.com',
                        [recipient],
                        fail_silently=False
                    )
                    email_sent = True
            except Exception as e:
                logger.error(f"Email delivery failed: {e}")

            return Response({
                'success': True,
                'message': 'Your message has been saved successfully.',
                'email_notification': 'sent' if email_sent else 'skipped_or_failed'
            }, status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

