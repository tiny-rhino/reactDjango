import os

from django.conf import settings
from react.render import render_component

def get_component_context(component, container, props = {}):
    if props:
        props.update(props)

    print(os.path.join(
        settings.PROJECT_ROOT, 
        'src/containers/' + container + '.js'
    ))

    component = render_component(
        os.path.join(
            settings.PROJECT_ROOT, 
            'src/containers/' + container + '.js'
        ), props
    )

    context = {
        'component': component,
        'container': container
    }

    return context