from django.http import JsonResponse

def home(request):
    return JsonResponse({
        "status": "online",
        "service": "Younes Portfolio Backend API",
        "version": "1.0.0",
        "frontend": "https://frontend-six-beryl-25.vercel.app",
        "endpoints": {
            "contact": "/api/contact/",
            "track_visit": "/api/track-visit/",
            "admin": "/admin/"
        }
    })

