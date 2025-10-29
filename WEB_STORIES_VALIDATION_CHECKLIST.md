# Web Stories AMP Validation Checklist

Use this checklist to ensure your Web Stories are fully AMP-compliant and ready for Google Discover.

---

## ✅ Pre-Launch Checklist

### 1. AMP Validation

- [ ] Story validates at [validator.ampproject.org](https://validator.ampproject.org)
- [ ] No AMP validation errors
- [ ] No AMP validation warnings (if possible)
- [ ] Story loads in AMP cache (`https://yourstore-com.cdn.ampproject.org/...`)
- [ ] All AMP components properly loaded

### 2. Required Metadata

- [ ] Publisher logo present (96x96px, square)
- [ ] Publisher logo URL is HTTPS
- [ ] Publisher name specified
- [ ] Story title present (max 70 characters)
- [ ] Poster portrait image (720x1280px, 9:16 ratio)
- [ ] Poster square image (1x1 ratio, optional but recommended)
- [ ] Poster landscape image (4x3 ratio, optional but recommended)

### 3. Structured Data (JSON-LD)

- [ ] Article schema present
- [ ] Headline field populated
- [ ] Publisher information included
- [ ] Publisher logo in schema
- [ ] Image field with valid URL
- [ ] datePublished field present
- [ ] dateModified field present
- [ ] Valid JSON syntax (no errors)

### 4. Content Requirements

#### Pages:
- [ ] Minimum 5 pages
- [ ] Maximum 30 pages (recommended: 10-15)
- [ ] Each page has unique ID
- [ ] No duplicate page IDs

#### Images:
- [ ] All images are 720x1280px or larger
- [ ] Images are 9:16 aspect ratio
- [ ] File size < 1MB per image
- [ ] HTTPS URLs only
- [ ] Alt text for all images
- [ ] Images load successfully

#### Text:
- [ ] Readable on all backgrounds
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Font size minimum 16px for body text
- [ ] Headlines < 70 characters
- [ ] Body text < 280 characters per page

#### Videos (if used):
- [ ] 9:16 aspect ratio
- [ ] < 60 seconds per video
- [ ] < 4MB file size
- [ ] Hosted on HTTPS
- [ ] Poster image provided

### 5. Technical Requirements

- [ ] Valid HTML5 DOCTYPE
- [ ] `⚡` or `amp` attribute on `<html>` tag
- [ ] AMP runtime script present (`https://cdn.ampproject.org/v0.js`)
- [ ] amp-story script present
- [ ] Required AMP boilerplate CSS present
- [ ] Custom styles < 75KB
- [ ] No external stylesheets (inline only)
- [ ] No custom JavaScript (AMP components only)
- [ ] Valid canonical URL
- [ ] Viewport meta tag present

### 6. SEO & Discoverability

#### Meta Tags:
- [ ] Title tag present (< 60 characters)
- [ ] Meta description (120-160 characters)
- [ ] Canonical URL specified
- [ ] Language specified (`lang` attribute)
- [ ] robots meta tag (index, follow)

#### Open Graph:
- [ ] og:type = "article"
- [ ] og:title present
- [ ] og:description present
- [ ] og:url present
- [ ] og:image present (1200x630px recommended)
- [ ] og:image dimensions specified

#### Twitter Card:
- [ ] twitter:card = "summary_large_image"
- [ ] twitter:title present
- [ ] twitter:description present
- [ ] twitter:image present

### 7. Performance

- [ ] Images optimized (compressed)
- [ ] Lazy loading enabled
- [ ] Page load time < 3 seconds
- [ ] Lighthouse performance score > 90
- [ ] No render-blocking resources
- [ ] Efficient caching headers
- [ ] CDN used for media assets

### 8. Mobile Optimization

- [ ] Tested on iOS Safari
- [ ] Tested on Android Chrome
- [ ] Touch targets > 48x48px
- [ ] Swipe navigation works
- [ ] No horizontal scroll
- [ ] Text is readable without zooming
- [ ] Interactive elements respond to touch

### 9. Accessibility

- [ ] All images have alt text
- [ ] Sufficient color contrast
- [ ] Text is readable
- [ ] ARIA labels where appropriate
- [ ] Keyboard navigation supported
- [ ] Screen reader compatible
- [ ] No flashing content > 3 times per second

### 10. Analytics

- [ ] Analytics component included (if tracking)
- [ ] Correct Measurement ID or Pixel ID
- [ ] Events properly configured
- [ ] Analytics script valid
- [ ] Test events firing correctly

### 11. Branding

- [ ] Consistent with brand colors
- [ ] Logo properly displayed
- [ ] Brand fonts used (if custom)
- [ ] Brand voice maintained
- [ ] Professional quality images

### 12. Call-to-Action

- [ ] CTA clearly visible
- [ ] CTA button functional
- [ ] CTA URL is correct
- [ ] CTA opens in appropriate way
- [ ] Tracking on CTA clicks (if enabled)

### 13. Legal & Compliance

- [ ] Privacy policy linked (if collecting data)
- [ ] Terms of service linked (if applicable)
- [ ] Copyright notices present
- [ ] Image rights secured
- [ ] GDPR compliant (if applicable)
- [ ] Cookie consent (if required)

### 14. Google Search Console

- [ ] Domain verified in Search Console
- [ ] Story URL submitted for indexing
- [ ] No indexing errors
- [ ] Story appears in Web Stories report
- [ ] Rich Results Test passes
- [ ] Mobile-Friendly Test passes

### 15. Testing Across Platforms

- [ ] Chrome (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (desktop)
- [ ] Safari (iOS)
- [ ] Firefox (desktop)
- [ ] Edge (desktop)
- [ ] Samsung Internet (mobile)

---

## 🔍 Validation Tools

### Online Validators:
1. **AMP Validator:** https://validator.ampproject.org
2. **Rich Results Test:** https://search.google.com/test/rich-results
3. **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
4. **PageSpeed Insights:** https://pagespeed.web.dev

### Browser Extensions:
- AMP Validator (Chrome)
- Lighthouse (Chrome DevTools)
- WAVE Accessibility (Chrome/Firefox)

### Command Line:
```bash
# Install AMP Validator
npm install -g amphtml-validator

# Validate story
amphtml-validator https://yourstore.com/pages/your-story

# Check structured data
curl -H "User-Agent: GoogleBot" https://yourstore.com/pages/your-story
```

---

## 🚨 Common Errors & Fixes

### Error: "The mandatory attribute 'publisher-logo-src' is missing"
**Fix:** Add publisher logo to amp-story tag
```html
<amp-story publisher-logo-src="https://yourstore.com/logo.png">
```

### Error: "The mandatory attribute 'poster-portrait-src' is missing"
**Fix:** Add poster image
```html
<amp-story poster-portrait-src="https://yourstore.com/poster.jpg">
```

### Error: "The tag 'script' is disallowed except in specific forms"
**Fix:** Remove custom JavaScript, use AMP components only

### Error: "CSS syntax error in tag 'style amp-custom'"
**Fix:** Validate CSS, remove any invalid properties

### Error: "The attribute 'onclick' may not appear in tag 'a'"
**Fix:** Remove inline event handlers, use AMP actions instead

### Warning: "The tag 'img' may only appear as a descendant of tag 'noscript'"
**Fix:** Use `<amp-img>` instead of `<img>`

---

## 📊 Quality Scores to Aim For

- **AMP Validation:** 0 errors, 0 warnings
- **Lighthouse Performance:** > 90
- **Lighthouse Accessibility:** > 95
- **Lighthouse Best Practices:** > 90
- **Lighthouse SEO:** 100
- **Mobile-Friendly:** Pass
- **Rich Results:** Pass
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

---

## ✔️ Final Sign-Off

Before publishing, ensure:

- [ ] All checklist items completed
- [ ] Story reviewed by team
- [ ] Links tested and working
- [ ] Analytics tracking verified
- [ ] Mobile experience tested
- [ ] AMP validation passed
- [ ] Submitted to Google Search Console
- [ ] Monitoring plan in place

---

## 📅 Post-Launch Monitoring

### Week 1:
- [ ] Check Google Search Console for errors
- [ ] Monitor analytics for engagement
- [ ] Verify story appears in search
- [ ] Check for any validation issues

### Week 2-4:
- [ ] Review performance metrics
- [ ] Check impressions and clicks
- [ ] Analyze user behavior
- [ ] Optimize based on data

### Monthly:
- [ ] Review analytics trends
- [ ] Update content if needed
- [ ] Check for new AMP features
- [ ] Optimize for better performance

---

## 🎯 Success Metrics

Track these KPIs:

1. **Visibility:**
   - Search impressions
   - Google Discover impressions
   - Click-through rate (CTR)

2. **Engagement:**
   - Story completion rate
   - Average time per story
   - Pages viewed per story
   - Bounce rate

3. **Conversions:**
   - CTA click rate
   - Conversion rate from stories
   - Revenue attributed to stories

4. **Technical:**
   - AMP validation status
   - Page load time
   - Core Web Vitals scores
   - Error rate

---

**Validation Date:** ______________

**Validated By:** ______________

**Next Review Date:** ______________

---

## 📞 Need Help?

If you encounter issues:

1. Check the [Integration Guide](WEB_STORIES_INTEGRATION_GUIDE.md)
2. Visit [AMP Project Documentation](https://amp.dev/documentation/)
3. Use [Google Search Central Help](https://support.google.com/webmasters)
4. Join [AMP Project Slack](https://bit.ly/amp-slack)

---

**Version:** 1.0.0  
**Last Updated:** October 2025

