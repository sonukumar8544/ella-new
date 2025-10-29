# Web Stories Quick Start Guide

Get your Web Stories up and running in 15 minutes!

---

## ⚡ 5-Minute Setup

### Step 1: Install the Section (2 minutes)

1. Go to **Shopify Admin > Online Store > Themes**
2. Click **Actions > Edit code**
3. In **Sections** folder, click **Add a new section**
4. Name it `web-stories`
5. Copy and paste the section code from `sections/web-stories.liquid`
6. **Save**

### Step 2: Add Section to Your Theme (1 minute)

1. Click **Customize** on your theme
2. Navigate to your homepage (or any page)
3. Click **Add section**
4. Select **Web Stories**
5. **Save**

### Step 3: Add Your First Story (2 minutes)

1. In the Web Stories section, click **Add block**
2. Select **Story**
3. Fill in:
   - **Story Title:** "Summer Collection 2024"
   - **Story Cover Image:** Upload a 9:16 portrait image
   - **Story AMP URL:** Your story URL
   - **Story Description:** Brief description
4. **Save**

✅ Done! Your first Web Story is live.

---

## 🎨 Create Your First AMP Story

### Option A: Use External Tools (Recommended)

#### Using MakeStories.io:

1. Go to [MakeStories.io](https://makestories.io)
2. Sign up for free account
3. Click **Create New Story**
4. Choose a template or start from scratch
5. Add 5-10 pages with images and text
6. Click **Publish**
7. Copy the story URL
8. Paste into your Shopify Web Stories section

#### Using Google Web Stories (WordPress):

1. Install WordPress locally or on hosting
2. Install **Web Stories** plugin
3. Create your story using the visual editor
4. Export or host on your domain
5. Use the URL in Shopify

### Option B: Host on Shopify

#### Create AMP Story Template:

1. In **Templates** folder, click **Add a new template**
2. Select **page**
3. Name it `page.web-story`
4. Copy and paste code from `templates/page.web-story.liquid`
5. **Save**

#### Create Metafield Definitions:

1. Go to **Settings > Custom data > Pages**
2. Click **Add definition**
3. Create these metafields:

| Name | Namespace.Key | Type |
|------|---------------|------|
| Story Page 1 | custom.story_page_1 | Multi-line text |
| Story Page 2 | custom.story_page_2 | Multi-line text |
| Story Page 3 | custom.story_page_3 | Multi-line text |
| Story CTA Title | custom.story_cta_title | Single line text |
| Story CTA URL | custom.story_cta_url | URL |
| Story CTA Image | custom.story_cta_image | File |

#### Create Your Story Page:

1. Go to **Online Store > Pages**
2. Click **Add page**
3. Enter title: "My First Story"
4. Select template: **page.web-story**
5. Add content to metafields (see examples below)
6. **Save**

---

## 📝 Example Story Content

### For Metafield: story_page_1

```html
<amp-story-grid-layer template="fill">
  <amp-img 
    src="https://cdn.shopify.com/s/files/1/0000/0000/files/image1.jpg" 
    layout="responsive" 
    width="720" 
    height="1280"
    alt="Product showcase"
  ></amp-img>
</amp-story-grid-layer>
<amp-story-grid-layer template="vertical">
  <h1 class="story-title">New Summer Collection</h1>
  <p class="story-body">Discover our latest arrivals perfect for the season</p>
</amp-story-grid-layer>
```

### For Metafield: story_page_2

```html
<amp-story-grid-layer template="fill">
  <amp-img 
    src="https://cdn.shopify.com/s/files/1/0000/0000/files/image2.jpg" 
    layout="responsive" 
    width="720" 
    height="1280"
    alt="Featured product"
  ></amp-img>
</amp-story-grid-layer>
<amp-story-grid-layer template="vertical" class="bottom">
  <h2 class="story-title">Premium Quality</h2>
  <p class="story-body">Made with the finest materials</p>
</amp-story-grid-layer>
```

### For Metafield: story_page_3

```html
<amp-story-grid-layer template="fill">
  <amp-img 
    src="https://cdn.shopify.com/s/files/1/0000/0000/files/image3.jpg" 
    layout="responsive" 
    width="720" 
    height="1280"
    alt="Call to action"
  ></amp-img>
</amp-story-grid-layer>
<amp-story-grid-layer template="thirds">
  <div grid-area="upper-third">
    <h2 class="story-title">Shop Now</h2>
  </div>
  <div grid-area="middle-third">
    <p class="story-body">Limited time offer - 20% off</p>
  </div>
  <div grid-area="lower-third">
    <a href="/collections/summer" class="story-cta">Browse Collection</a>
  </div>
</amp-story-grid-layer>
```

---

## 🎯 Customization Guide

### Change Colors:

In Theme Customizer:
1. Open **Web Stories** section
2. Scroll to **Color Settings**
3. Customize:
   - Section Background
   - Heading Color
   - Title Color
   - CTA Button Colors
4. **Save**

### Change Layout:

1. Open **Web Stories** section
2. Go to **Layout Settings**
3. Choose:
   - **Grid** for static layout
   - **Carousel** for scrollable
4. Set columns: 2-6 for desktop, 1-3 for mobile
5. Adjust gap between stories
6. **Save**

### Enable/Disable Features:

#### Carousel Navigation:
- Toggle **Show Navigation Arrows**
- Toggle **Show Pagination Dots**

#### Autoplay:
- Toggle **Enable Autoplay**
- Set **Autoplay Speed** (2-10 seconds)

#### Analytics:
- Toggle **Enable Analytics Tracking**

---

## 📊 Set Up Analytics (Optional)

### Google Analytics 4:

1. Get your GA4 Measurement ID:
   - Go to [analytics.google.com](https://analytics.google.com)
   - Admin > Data Streams
   - Copy Measurement ID (G-XXXXXXXXXX)

2. Add to your AMP story template:
   - Edit `templates/page.web-story.liquid`
   - Find: `"gtag_id": "YOUR-GA4-MEASUREMENT-ID"`
   - Replace with your ID
   - **Save**

3. Events tracked automatically:
   - Story clicks
   - Page views
   - Story completion

---

## ✅ Validate Your Story

### Quick Validation:

1. Visit [validator.ampproject.org](https://validator.ampproject.org)
2. Enter your story URL
3. Click **Validate**
4. Fix any errors shown

### Must-Have Elements:

✓ Publisher logo (96x96px)  
✓ Story title  
✓ Cover image (720x1280px)  
✓ At least 5 pages  
✓ HTTPS URLs only  

---

## 🚀 Submit to Google

### Step 1: Verify Your Store

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your Shopify domain
3. Verify ownership

### Step 2: Request Indexing

1. In Search Console, click **URL Inspection**
2. Enter your story URL
3. Click **Request Indexing**
4. Wait 1-2 weeks for Google to index

### Step 3: Monitor Performance

1. Check **Web Stories** report in Search Console
2. View impressions and clicks
3. Fix any issues reported

---

## 📱 Test on Mobile

### iOS (Safari):
1. Open Safari on iPhone
2. Go to your story URL
3. Test:
   - Swipe left/right for pages
   - Tap to advance
   - CTA buttons work

### Android (Chrome):
1. Open Chrome on Android
2. Go to your story URL
3. Test same features as iOS

---

## 🎨 Design Tips

### Images:
- Use high-quality photos (300 DPI+)
- Keep file size < 100KB (compress)
- Use 9:16 aspect ratio (portrait)
- Optimize for mobile viewing

### Text:
- Keep it brief (< 50 words per page)
- Use large, readable fonts (24px+)
- Ensure contrast with background
- Test on actual devices

### Colors:
- Match your brand colors
- Use high contrast for readability
- White/light text on dark images
- Dark text on light images

### Animations:
- Use sparingly
- Keep under 3 seconds
- Don't distract from content
- Test for motion sensitivity

---

## 🔧 Troubleshooting

### Story Not Showing?
- Check section is added to page
- Verify story block has all required fields
- Refresh browser cache

### Images Not Loading?
- Verify URLs are HTTPS
- Check image file sizes (< 1MB)
- Test image URLs in browser

### AMP Errors?
- Run through AMP validator
- Check for custom JavaScript
- Verify all required metadata

### Not in Google Search?
- Submit to Search Console
- Wait 1-2 weeks for indexing
- Check for validation errors

---

## 📚 Next Steps

After your first story is live:

1. **Create 2-3 more stories** for variety
2. **Monitor analytics** for engagement
3. **Optimize based on data** (what works best)
4. **Update regularly** (fresh content ranks better)
5. **Promote on social media** to drive traffic
6. **Test different formats** (product demos, tutorials, etc.)

---

## 💡 Story Ideas for E-commerce

### Product Showcases:
- New arrivals
- Best sellers
- Seasonal collections
- Limited editions

### Behind the Scenes:
- How products are made
- Meet the team
- Company values
- Sustainability efforts

### How-To Guides:
- Styling tips
- Product usage
- Care instructions
- DIY projects

### Customer Stories:
- Testimonials
- User-generated content
- Before/after transformations
- Success stories

### Promotions:
- Flash sales
- Discount codes
- Bundle deals
- Holiday specials

---

## 🎁 Free Resources

### Templates:
- [MakeStories Templates](https://makestories.io/templates)
- [AMP Story Examples](https://amp.dev/documentation/examples/?format=stories)

### Stock Images:
- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images and videos

### Tools:
- [Canva](https://canva.com) - Design graphics
- [TinyPNG](https://tinypng.com) - Compress images
- [Cloudinary](https://cloudinary.com) - Image optimization

### Learning:
- [AMP Documentation](https://amp.dev/documentation/)
- [Web Stories Best Practices](https://developers.google.com/search/docs/advanced/appearance/web-stories)
- [Shopify Theme Development](https://shopify.dev/themes)

---

## 📞 Get Help

**Issues?** Check the [Full Integration Guide](WEB_STORIES_INTEGRATION_GUIDE.md)

**Questions?** See the [Validation Checklist](WEB_STORIES_VALIDATION_CHECKLIST.md)

**Need Support?** Visit [Shopify Community](https://community.shopify.com)

---

## ✨ Tips for Success

1. **Start Simple** - Create 3-5 stories to begin
2. **Focus on Quality** - Better to have 5 great stories than 20 mediocre ones
3. **Mobile First** - Always design for mobile viewing
4. **Test Everything** - Check on real devices before publishing
5. **Monitor Performance** - Use analytics to improve
6. **Stay Consistent** - Match your brand style
7. **Update Regularly** - Fresh content performs better
8. **Promote Stories** - Share on social media
9. **Engage Users** - Add interactive CTAs
10. **Learn & Iterate** - Improve based on data

---

**Ready to create amazing Web Stories?** Let's go! 🚀

---

**Version:** 1.0.0  
**Last Updated:** October 2025

