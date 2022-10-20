from rest_framework.renderers import JSONRenderer
    
class CustomRenderer(JSONRenderer):
    def render(self, data, accepted_media_type=None, renderer_context=None):
        response = {
            'data': data,
            'metadata': {},
            'success': True,
            'errors': {}
        }

        # Handling errors
        if renderer_context['response'].status_code not in [200, 201, 202, 203, 204, 205, 206]:
            response['data'] = {}
            response['success'] = False
            response['errors'] = data

        # Handling pagination
        if data and 'results' in data.keys():
            response['data'] = data['results']
            for key in data.keys():
                if key != 'results':
                    response['metadata'][key] = data[key]

        return super(CustomRenderer, self).render(response, accepted_media_type, renderer_context)
