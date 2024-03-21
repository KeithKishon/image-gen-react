word = """
Once upon a time, in the beautiful country of India, there lived a little girl named Sitha. She lived in a small village surrounded by a lush green jungle. Sitha loved to play tag with her friends in the jungle every day.

One stormy day, as Sitha was getting ready to go play tag with her friends, her mother stopped her and said, "Sitha, it's not safe to go out and play in the jungle today. The storm is getting stronger and it's not safe for you to be out there."

Sitha was disappointed, but she understood that her mother was only trying to keep her safe. So, she decided to stay home and play with her toys instead. But as the day went on, Sitha couldn't help but feel bored and restless.

As the rain started to pour heavily, Sitha's mother lit a lamp and told her a story about a brave princess who lived in the jungle. The princess loved to play tag with her friends too, but she always listened to her mother's advice and stayed safe during storms.

Sitha was fascinated by the story and asked her mother, "But what did the princess do when she couldn't go out and play?"

Her mother smiled and said, "The princess used her imagination and created her own fun indoors. She danced in the rain, sang songs, and even made a fort out of blankets and pillows."

Sitha's eyes lit up with excitement and she asked her mother if they could do the same. Her mother happily agreed and they spent the rest of the day dancing, singing, and building forts.

 they played in the jungle.
 even when things don't go as planned, we can always find new ways to have fun and make the best of any situation.

"""

def count_words(word):
    words_list = word.split()
    word_count = len(words_list)
    return word_count

# def image_timer(word_count):
#     total_time_seconds = word_count / 2.04 / 5
#     minutes = total_time_seconds // 60
#     seconds = total_time_seconds % 60
#     milliseconds = (minutes * 60000) + (seconds * 1000)
#     return milliseconds

def image_timer(word_count):
    words_per_sec = 2.04
    duration_of_image = (word_count/words_per_sec)/5
    return duration_of_image*1000

word_count = count_words(word)

milliseconds = image_timer(word_count)

print("Number of words (ignoring spaces):", word_count)
print("Total time for 400 words in milliseconds:", milliseconds)
