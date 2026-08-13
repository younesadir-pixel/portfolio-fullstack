from django.db import models


class Message(models.Model):
    """Model to store contact form submissions"""

    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=150, blank=True)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"

    def __str__(self):
        return f"Message from {self.name} <{self.email}>"


class Visit(models.Model):
    """Model to store privacy-friendly visitor analytics"""

    path = models.CharField(max_length=255, default='/')
    user_agent = models.TextField(blank=True, null=True)
    referrer = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Visitor Log"
        verbose_name_plural = "Visitor Logs"

    def __str__(self):
        return f"Visit to {self.path} at {self.created_at.strftime('%Y-%m-%d %H:%M:%S')}"

