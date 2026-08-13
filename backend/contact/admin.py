from django.contrib import admin
from .models import Message, Visit


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name', 'email', 'subject', 'body')
    readonly_fields = ('created_at',)


@admin.register(Visit)
class VisitAdmin(admin.ModelAdmin):
    list_display = ('created_at', 'path', 'referrer_display', 'user_agent_short')
    list_filter = ('created_at', 'path')
    search_fields = ('path', 'referrer', 'user_agent')
    ordering = ['-created_at']
    readonly_fields = ('created_at', 'path', 'referrer', 'user_agent')

    def referrer_display(self, obj):
        return obj.referrer if obj.referrer else '-'
    referrer_display.short_description = 'Referrer'

    def user_agent_short(self, obj):
        if not obj.user_agent:
            return '-'
        return obj.user_agent[:60] + ('...' if len(obj.user_agent) > 60 else '')
    user_agent_short.short_description = 'User Agent'

    def changelist_view(self, request, extra_context=None):
        extra_context = extra_context or {}
        extra_context['total_visits'] = Visit.objects.count()
        return super().changelist_view(request, extra_context=extra_context)

