from django.views.generic import TemplateView
from django.shortcuts import render 

from .utils import get_component_context

class IndexView(TemplateView):
    template_name = 'base.html'
    container_name = 'index'
    component_name = 'index'

    def get(self, request, *args, **kwargs):            
        context = get_component_context(self.container_name, self.component_name)

        return render(request, self.template_name, context)
