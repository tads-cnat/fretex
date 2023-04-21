from rest_framework import pagination
from rest_framework.response import Response


class CustomPagination(pagination.PageNumberPagination):
    page_size_query_param = "per_page"

    def get_paginated_response(self, data):
        return Response(
            {
                "links": {"next": self.get_next_link(), "previous": self.get_previous_link()},
                "all_count": self.page.paginator.count,
                "current_count": self.page.paginator.count - self.page.paginator.count * (self.page.number - 1),
                "pages": self.page.paginator.num_pages,
                "current_page": self.page.number,
                "per_page": self.page.paginator.per_page,
                "results": data,
            }
        )
