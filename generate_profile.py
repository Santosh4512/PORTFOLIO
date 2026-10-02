from PIL import Image, ImageDraw, ImageFilter

w, h = 1200, 1500
img = Image.new('RGB', (w, h), '#f3f3f3')
draw = ImageDraw.Draw(img)

# Suit and shirt
suit_color = (18, 42, 86)
shirt_color = '#f4f5f7'

draw.rounded_rectangle((220, 780, 980, 1470), radius=60, fill=suit_color)
draw.polygon([(260, 780), (440, 780), (360, 1160), (230, 1120)], fill=(26, 65, 108))
draw.polygon([(940, 780), (760, 780), (840, 1160), (970, 1120)], fill=(26, 65, 108))
draw.rounded_rectangle((330, 780, 870, 1180), radius=40, fill=shirt_color)
draw.rectangle((560, 780, 640, 1180), fill=(18, 74, 144))
draw.polygon([(560, 760), (640, 760), (600, 910), (560, 760)], fill=(18, 74, 144))

# Collar
for pts in [
    [(420, 780), (520, 780), (470, 900), (390, 900)],
    [(780, 780), (680, 780), (720, 900), (810, 900)],
]:
    draw.polygon(pts, fill=shirt_color)

# Skin tone base
face = Image.new('RGBA', (w, h), (0, 0, 0, 0))
fd = ImageDraw.Draw(face)
fd.ellipse((230, 180, 970, 900), fill=(216, 178, 142))
fd.rounded_rectangle((500, 880, 700, 1015), radius=35, fill=(214, 176, 141))
face = face.filter(ImageFilter.GaussianBlur(0.5))
img = Image.alpha_composite(img.convert('RGBA'), face).convert('RGB')

# Hair
hair = Image.new('RGBA', (w, h), (0, 0, 0, 0))
hd = ImageDraw.Draw(hair)
hd.ellipse((210, 120, 990, 780), fill=(10, 12, 16, 255))
for x in range(220, 980, 90):
    hd.rounded_rectangle((x, 120, x + 90, 340), radius=35, fill=(10, 12, 16, 255))
img = Image.alpha_composite(img.convert('RGBA'), hair).convert('RGB')

# Eyes
for x in (420, 760):
    draw.ellipse((x - 30, 430, x + 30, 470), fill=(255, 255, 255))
    draw.ellipse((x - 18, 438, x + 18, 468), fill=(30, 25, 22))
    draw.ellipse((x - 8, 444, x + 8, 456), fill=(0, 0, 0))
    draw.arc((x - 42, 345, x + 42, 395), start=180, end=0, fill=(28, 28, 28), width=8)

# Nose
for y in range(470, 600, 12):
    draw.line((600, y, 600, y + 10), fill=(201, 154, 118), width=4)

# Smile
for i in range(0, 90, 3):
    x = 600 + (i - 45) * 1.3
    y = 690 + (i % 18) * 0.3
    draw.ellipse((x - 18, y - 10, x + 18, y + 10), outline=(170, 110, 95), width=4)

# Bindi
for r in range(18, 0, -2):
    draw.ellipse((590 - r, 160 - r, 610 + r, 180 + r), outline=(255, 128, 0), width=2)

img = img.filter(ImageFilter.SMOOTH_MORE)
img.save('public/profile.jpg', quality=95)
print('Generated public/profile.jpg')
