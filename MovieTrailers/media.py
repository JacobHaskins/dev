################################
#
# media.py
#
# Description: Contains the data model class for the Movies Trailers project.
#
# Created on April 1, 2017, by Jacob L. Haskins
#
################################


import webbrowser

class Movie():
    """Movie stores film-related information.

    Attributes:
        movie_title (string): Title of the movie.
        poster_image_url (string): URL to an image of the movie's poster.
        trailer_youtube_url (string): URL to movie's trailer on YouTube.
    """
    
    def __init__(self, movie_title, poster_image, trailer_youtube):
        self.title = movie_title
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube
        
