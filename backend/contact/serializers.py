from rest_framework import serializers
from .models import Message


class MessageSerializer(serializers.ModelSerializer):
    """Serializer for contact messages with flexible payload handling (supports 'body' or 'message')"""

    message = serializers.CharField(source='body', required=False, allow_blank=True)

    class Meta:
        model = Message
        fields = ['id', 'name', 'email', 'subject', 'body', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']
        extra_kwargs = {
            'body': {'required': False, 'allow_blank': True}
        }

    def to_internal_value(self, data):
        # Support both 'message' and 'body' in incoming JSON payload
        if 'message' in data and 'body' not in data:
            data = data.copy()
            data['body'] = data['message']
        return super().to_internal_value(data)

    def validate_name(self, value):
        if not value or len(value.strip()) == 0:
            raise serializers.ValidationError('Name cannot be empty')
        return value.strip()

    def validate_email(self, value):
        if not value or len(value.strip()) == 0:
            raise serializers.ValidationError('Email cannot be empty')
        return value.strip()

    def validate(self, attrs):
        body = attrs.get('body', '')
        if not body or len(body.strip()) == 0:
            raise serializers.ValidationError({'message': 'Message content cannot be empty'})
        return attrs
