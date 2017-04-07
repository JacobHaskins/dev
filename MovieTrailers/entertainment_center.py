################################
#
# entertainment_center.py
#
# Description: Controller for the Movies Trailers project.
#
# Created on April 1, 2017, by Jacob L. Haskins
#
################################

import fresh_tomatoes
import media

# Create instances of class Movie to display on the web page.
a_new_hope =  media.Movie("Star Wars: A New Hope",
                          "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg", # NOQA
                          "https://youtu.be/1g3_CFmnU7k")

the_empire_strikes_back =  media.Movie("Star Wars: The Empire Strikes Back",
                                       "https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg", # NOQA 
                                       "https://youtu.be/96v4XraJEPI")

return_of_the_jedi = media.Movie("Star Wars: Return of the Jedi",
                                 "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg", # NOQA
                                 "https://youtu.be/7L8p7_SLzvU")

the_phantom_menace = media.Movie("Star Wars: The Phantom Menace",
                                 "https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg", # NOQA
                                 "https://youtu.be/bD7bpG-zDJQ")

attack_of_the_clones = media.Movie("Star Wars: Attack of the Clones",
                                   "https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg", # NOQA
                                   "https://youtu.be/gYbW1F_c9eM")

revenge_of_the_sith = media.Movie("Star Wars: Revenge of the Sith",
                                  "https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg", # NOQA
                                  "https://youtu.be/5UnjrG_N8hU")

the_clone_wars = media.Movie("Star Wars: The Clone Wars",
                             "https://upload.wikimedia.org/wikipedia/en/7/72/Star_wars_the_clone_wars.jpg", # NOQA
                             "https://youtu.be/yA14TnyCkgE")

the_force_awakens = media.Movie("Star Wars: The Force Awakens",
                                "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg", # NOQA
                                "https://youtu.be/sGbxmsDFVnE")

rogue_one = media.Movie("Star Wars: Rogue One",
                        "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png", # NOQA
                        "https://youtu.be/sC9abcLLQpI")

the_last_jedi = media.Movie("Star Wars: The Last Jedi",
                            "https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg", # NOQA
                            "https://youtu.be/dQw4w9WgXcQ")

# Send a list of the instances to open in a web page
fresh_tomatoes.open_movies_page([a_new_hope, the_empire_strikes_back,
                                return_of_the_jedi, the_phantom_menace,
                                attack_of_the_clones, revenge_of_the_sith,
                                the_clone_wars, the_force_awakens, rogue_one,
                                the_last_jedi])
