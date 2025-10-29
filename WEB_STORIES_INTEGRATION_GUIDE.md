# Web Stories Integration Guide for Shopify

## 📖 Overview

This guide provides complete instructions for implementing and managing AMP-based Web Stories on your Shopify store. Web Stories are immersive, full-screen, tappable experiences that are discoverable on Google Search and Google Discover.

---

## 📋 Table of Contents

1. [Installation](#installation)
2. [Creating Web Stories](#creating-web-stories)
3. [Adding Stories to Your Store](#adding-stories-to-your-store)
4. [Google Search Console Integration](#google-search-console-integration)
5. [AMP Validation](#amp-validation)
6. [Analytics Setup](#analytics-setup)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

---

## 🚀 Installation

### Step 1: Add the Section to Your Theme

1. Navigate to **Online Store > Themes** in your Shopify admin
2. Click **Actions > Edit code** on your active theme
3. In the **Sections** folder, create a new file named `web-stories.liquid`
4. Copy and paste the complete Web Stories section code
5. Save the file

### Step 2: Add the AMP Template (Optional)

If you want to host AMP stories directly on Shopify:

1. In the **Templates** folder, create a new file named `page.web-story.liquid`
2. Copy and paste the AMP template code
3. Save the file

### Step 3: Add to Your Homepage or Pages

1. Go to **Online Store > Themes > Customize**
2. Navigate to the page where you want to add stories
3. Click **Add section**
4. Select **Web Stories** from the list
5. Configure the section settings

---

## ✏️ Creating Web Stories

### Method 1: Using External Tools

#### Recommended Tools:
- **Google Web Stories for WordPress** - Free, official plugin
- **MakeStories** - Visual editor with templates
- **Newsroom AI** - AI-powered story creation
- **Visual Stories** - Enterprise solution

#### Steps:
1. Create your story using one of the tools above
2. Export as AMP HTML
3. Host on your domain or use the tool's hosting
4. Copy the story URL
5. Add to your Shopify Web Stories section

### Method 2: Using the Shopify Template

#### Steps:

1. **Create a new page in Shopify:**
   - Go to **Online Store > Pages**
   - Click **Add page**
   - Enter a title (e.g., "Summer Collection Story")
   - Select **page.web-story** as the template

2. **Add story content using metafields:**
   ```
   Custom Metafields Required:
   - story_page_1 (multi_line_text_field)
   - story_page_2 (multi_line_text_field)
   - story_page_3 (multi_line_text_field)
   - story_page_4 (multi_line_text_field)
   - story_page_5 (multi_line_text_field)
   - story_cta_title (single_line_text_field)
   - story_cta_text (multi_line_text_field)
   - story_cta_url (url)
   - story_cta_button (single_line_text_field)
   - story_cta_image (file_reference)
   ```

3. **Create metafield definitions:**
   - Go to **Settings > Custom data > Pages**
   - Click **Add definition**
   - Create each metafield with the namespace `custom`

4. **Add content to each metafield:**
   Each page should contain AMP-valid HTML:

   ```html
   <amp-story-grid-layer template="fill">
     <amp-img 
       src="https://yourstore.com/image.jpg" 
       layout="responsive" 
       width="720" 
       height="1280"
     ></amp-img>
   </amp-story-grid-layer>
   <amp-story-grid-layer template="vertical">
     <h1 class="story-title">Your Title</h1>
     <p class="story-body">Your content here</p>
   </amp-story-grid-layer>
   ```

### Image Requirements

- **Aspect Ratio:** 9:16 (portrait)
- **Recommended Size:** 720x1280px
- **Maximum Size:** 1080x1920px
- **Format:** JPG, PNG, WebP
- **File Size:** < 1MB per image

### Video Requirements

- **Aspect Ratio:** 9:16 (portrait)
- **Maximum Duration:** 60 seconds per video
- **Format:** MP4, WebM
- **Codec:** H.264, VP9
- **File Size:** < 4MB

---

## 🎨 Adding Stories to Your Store

### In the Theme Customizer:

1. Open the **Theme Customizer**
2. Navigate to your **Web Stories** section
3. Click **Add story block**
4. Configure each story:

#### Story Block Settings:
- **Story Title:** The display name (e.g., "Summer Collection 2024")
- **Story Cover Image:** Upload a 9:16 portrait image
- **Story AMP URL:** Full URL to your AMP story
- **Story Description:** Brief description (optional)
- **Story Author:** Author name (optional)
- **Story Duration:** Estimated reading time (e.g., "2 min")
- **Enable CTA:** Toggle CTA button
- **CTA Button Text:** Button label (e.g., "Read Story")

### Section Settings:

#### Layout Options:
- **Layout Style:** Grid or Carousel
- **Stories per row (Desktop):** 2-6 columns
- **Stories per row (Mobile):** 1-3 columns
- **Gap between stories:** 8-40px

#### Carousel Settings:
- **Enable Carousel:** Toggle carousel mode
- **Show Navigation Arrows:** Display prev/next buttons
- **Show Pagination Dots:** Display page indicators
- **Enable Autoplay:** Auto-advance stories
- **Autoplay Speed:** Duration per story (2-10 seconds)

#### Styling Options:
- **Section Heading:** Main title
- **Subheading:** Subtitle text
- **Heading Size:** 20-60px
- **Card Border Radius:** 0-30px
- **Card Shadow:** None, Small, Medium, Large
- **Overlay Opacity:** 0-100%

#### Colors:
- Section Background
- Heading Color
- Story Title Color
- Description Color
- CTA Button Colors

---

## 🔍 Google Search Console Integration

### Step 1: Verify Your Domain

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your Shopify domain
3. Verify ownership using one of these methods:
   - **HTML tag** (in theme.liquid)
   - **Domain DNS** (in Shopify domains settings)
   - **Google Analytics**

### Step 2: Submit Stories for Indexing

#### Via URL Inspection:
1. In Search Console, click **URL Inspection**
2. Enter your story URL
3. Click **Request Indexing**

#### Via Sitemap:
1. Create a sitemap for your stories
2. In Search Console, go to **Sitemaps**
3. Submit your sitemap URL

### Step 3: Enable Web Stories Report

1. In Search Console, go to **Enhancements**
2. Look for **Web Stories** report
3. Monitor issues and impressions

### Step 4: Add Required Metadata

Ensure each story includes:

```html
<!-- Publisher Logo (must be 96x96px) -->
<meta name="amp-story-publisher-logo-src" content="https://yourstore.com/logo.png">

<!-- Poster Images -->
<meta name="amp-story-poster-portrait-src" content="https://yourstore.com/poster-720x1280.jpg">
<meta name="amp-story-poster-square-src" content="https://yourstore.com/poster-1200x1200.jpg">
<meta name="amp-story-poster-landscape-src" content="https://yourstore.com/poster-1280x720.jpg">
```

---

## ✅ AMP Validation

### Using the AMP Validator

1. **Online Validator:**
   - Visit [validator.ampproject.org](https://validator.ampproject.org)
   - Enter your story URL
   - Review any errors or warnings

2. **Browser Extension:**
   - Install the [AMP Validator Chrome Extension](https://chrome.google.com/webstore/detail/amp-validator)
   - Visit your story page
   - Click the extension icon to see validation status

3. **Command Line:**
   ```bash
   npm install -g amphtml-validator
   amphtml-validator https://yourstore.com/pages/your-story
   ```

### Common Validation Issues:

#### ❌ Missing Required Metadata
**Fix:** Add publisher logo and poster images

#### ❌ Invalid AMP Components
**Fix:** Use only allowed AMP components and attributes

#### ❌ CSS Limitations Exceeded
**Fix:** Inline styles must be < 75KB

#### ❌ JavaScript Not Allowed
**Fix:** Use AMP components instead of custom JS

### Testing Checklist:

- [ ] Story validates on AMP Validator
- [ ] All images load correctly
- [ ] Publisher logo is 96x96px
- [ ] Poster images are correct dimensions
- [ ] Story is accessible on mobile
- [ ] Tap navigation works
- [ ] Analytics tracking works
- [ ] CTA links work correctly
- [ ] Story appears in Google Search Console

---

## 📊 Analytics Setup

### Google Analytics 4

1. **Get your Measurement ID:**
   - Go to [Google Analytics](https://analytics.google.com)
   - Navigate to **Admin > Data Streams**
   - Copy your Measurement ID (G-XXXXXXXXXX)

2. **Add to AMP Template:**
   Edit `page.web-story.liquid` and replace:
   ```json
   "gtag_id": "YOUR-GA4-MEASUREMENT-ID"
   ```

3. **Events Tracked Automatically:**
   - `story_progress` - Each page viewed
   - `story_complete` - Story finished
   - `web_story_click` - Story clicked from section

### Facebook Pixel

Add to your theme.liquid before `</head>`:

```liquid
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR-PIXEL-ID');
  fbq('track', 'PageView');
</script>
```

### Custom Analytics

Implement the `customAnalytics` object in your theme:

```javascript
window.customAnalytics = {
  track: function(event, data) {
    // Your custom tracking logic
    console.log('Event:', event, 'Data:', data);
    
    // Example: Send to your backend
    fetch('/api/analytics', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({event, data, timestamp: new Date()})
    });
  }
};
```

### Viewing Analytics

#### In Google Analytics 4:
1. Go to **Reports > Engagement > Events**
2. Look for:
   - `web_story_click`
   - `story_progress`
   - `story_complete`

#### In Google Search Console:
1. Navigate to **Performance**
2. Filter by **Web Stories**
3. View impressions, clicks, and CTR

---

## 🎯 Best Practices

### Content Guidelines

#### Length:
- **Optimal:** 10-15 pages per story
- **Minimum:** 5 pages
- **Maximum:** 20 pages

#### Pacing:
- Keep each page brief (1-3 seconds read time)
- Use animations sparingly
- Ensure smooth transitions

#### Visual Design:
- Use high-quality, eye-catching images
- Maintain consistent branding
- Ensure text is readable on all backgrounds
- Use contrasting colors for text overlays

#### Text Guidelines:
- **Headline:** Maximum 70 characters
- **Body:** Maximum 280 characters per page
- **Font Size:** Minimum 16px for body text

### SEO Optimization

#### Titles:
- Keep under 70 characters
- Include target keywords
- Make it compelling and clickable

#### Descriptions:
- 120-160 characters
- Include call-to-action
- Describe the story value

#### Images:
- Use descriptive alt text
- Optimize file sizes (< 100KB per image)
- Use WebP format when possible

#### URLs:
- Use clean, descriptive URLs
- Include keywords
- Avoid special characters

### Performance Tips

1. **Lazy Loading:**
   - Enabled by default in the section
   - Images load only when visible

2. **Image Optimization:**
   - Compress images before uploading
   - Use Shopify's image CDN
   - Specify width/height attributes

3. **Caching:**
   - Stories are cached by AMP CDN
   - Updates may take 10-20 minutes to appear

4. **Mobile-First:**
   - Test on actual devices
   - Ensure touch targets are > 48x48px
   - Optimize for slow connections

### Accessibility

- Include alt text for all images
- Use semantic HTML
- Ensure sufficient color contrast (4.5:1 minimum)
- Support keyboard navigation
- Add ARIA labels where needed

---

## 🐛 Troubleshooting

### Issue: Stories Not Showing Up

**Possible Causes:**
- Section not added to page
- No story blocks added
- Story blocks missing required fields

**Solutions:**
1. Verify section is added in Theme Customizer
2. Ensure at least one story block exists
3. Check that each story has title and URL

---

### Issue: Images Not Loading

**Possible Causes:**
- Invalid image URLs
- CORS issues
- Images too large

**Solutions:**
1. Verify image URLs are accessible
2. Use Shopify CDN URLs (`image_url` filter)
3. Optimize image sizes (< 1MB)

---

### Issue: AMP Validation Errors

**Possible Causes:**
- Invalid HTML markup
- Disallowed attributes
- Missing required metadata

**Solutions:**
1. Run through [AMP Validator](https://validator.ampproject.org)
2. Check for JavaScript in story content
3. Verify all required meta tags are present

---

### Issue: Not Appearing in Google Search

**Possible Causes:**
- Not indexed yet
- Validation errors
- Missing structured data

**Solutions:**
1. Submit to Google Search Console
2. Verify AMP validation passes
3. Check JSON-LD structured data
4. Wait 1-2 weeks for indexing

---

### Issue: Analytics Not Tracking

**Possible Causes:**
- Incorrect Measurement ID
- Analytics blocked by browser
- Misconfigured events

**Solutions:**
1. Verify GA4 Measurement ID is correct
2. Test in incognito mode
3. Check browser console for errors
4. Use Google Analytics DebugView

---

### Issue: Carousel Not Working

**Possible Causes:**
- Carousel disabled in settings
- JavaScript errors
- Too few stories

**Solutions:**
1. Enable carousel in section settings
2. Check browser console for errors
3. Ensure at least 2 stories exist
4. Test on different browsers

---

### Issue: Stories Not Mobile-Responsive

**Possible Causes:**
- Fixed pixel widths
- Overflow issues
- Viewport settings

**Solutions:**
1. Use responsive units (%, vw, vh)
2. Test on various screen sizes
3. Check mobile column settings
4. Verify touch interactions work

---

## 📱 Mobile Testing

### Test on Real Devices:
- iPhone (iOS Safari)
- Android (Chrome)
- iPad/Tablet

### Use Browser DevTools:
1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test various device profiles
4. Check performance tab

### Lighthouse Audit:
1. Open Chrome DevTools
2. Go to **Lighthouse** tab
3. Select **Mobile**
4. Run audit
5. Aim for scores > 90

---

## 🔄 Updating Stories

### To Update a Story:
1. Edit the original story content
2. If using external hosting, changes appear automatically
3. If using Shopify pages, edit the page content
4. Clear cache if needed (wait 10-20 minutes)

### To Add New Stories:
1. In Theme Customizer, open Web Stories section
2. Click **Add block**
3. Select **Story**
4. Configure story settings
5. Save changes

### To Remove Stories:
1. In Theme Customizer, open Web Stories section
2. Click on the story block to remove
3. Click **Remove block**
4. Save changes

---

## 📚 Additional Resources

### Official Documentation:
- [AMP Story Format](https://amp.dev/documentation/components/amp-story/)
- [Web Stories for Google Search](https://developers.google.com/search/docs/advanced/appearance/web-stories)
- [Shopify Liquid Reference](https://shopify.dev/docs/api/liquid)

### Tools:
- [AMP Validator](https://validator.ampproject.org)
- [Google Web Stories WordPress Plugin](https://wp.stories.google)
- [MakeStories](https://makestories.io)
- [Rich Results Test](https://search.google.com/test/rich-results)

### Community:
- [AMP Project GitHub](https://github.com/ampproject/amphtml)
- [Shopify Community Forums](https://community.shopify.com)
- [Web Stories Community](https://blog.google/products/web-stories/)

---

## 🆘 Support

For additional help:

1. **Check Shopify Forums:** [community.shopify.com](https://community.shopify.com)
2. **AMP Support:** [amp.dev/support](https://amp.dev/support)
3. **Google Search Console Help:** [support.google.com/webmasters](https://support.google.com/webmasters)

---

## 📄 License

This Web Stories implementation is provided as-is for use in Shopify themes. You're free to modify and customize it for your needs.

---

## 🎉 Success Checklist

Before going live, ensure:

- [ ] Section installed and configured
- [ ] At least 3-5 stories added
- [ ] All stories AMP validated
- [ ] Images optimized (< 100KB each)
- [ ] Analytics configured
- [ ] Tested on mobile devices
- [ ] Submitted to Google Search Console
- [ ] Stories accessible via clean URLs
- [ ] CTA buttons functional
- [ ] Performance score > 90
- [ ] No accessibility issues
- [ ] Stories match brand guidelines

---

**Last Updated:** October 2025  
**Version:** 1.0.0

