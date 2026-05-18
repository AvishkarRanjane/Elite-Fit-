# QUICK CUSTOMIZATION GUIDE - ELITE FIT

## 🎯 Most Common Changes

### 1. CHANGE GYM NAME

**File**: `index.html`

```html
<!-- UPDATE THESE SECTIONS -->

<!-- In <title> tag (Line 7) -->
<title>YOUR GYM NAME - Transform Your Body, Transform Your Life</title>

<!-- In Logo (Lines 15-17) -->
<span class="logo-text">YOUR GYM NAME</span>

<!-- In Hero Title (Lines 89-92) -->
<h1 class="hero-title">Build Your Body.<br>
    <span class="neon-text">Transform Your Life.</span>
</h1>

<!-- In Footer (Line 438) -->
<h3>YOUR GYM NAME</h3>
```

---

### 2. CHANGE CONTACT INFORMATION

**File**: `index.html`

```html
<!-- ADDRESS (Around Line 411) -->
<h3>Address</h3>
<p>123 Fitness Avenue<br>Gym City, GC 12345</p>

<!-- PHONE (Around Line 417) -->
<h3>Phone</h3>
<p>+1 (555) 123-4567<br>+1 (555) 987-6543</p>

<!-- EMAIL (Around Line 423) -->
<h3>Email</h3>
<p>info@yourgymemail.com<br>support@yourgymemail.com</p>

<!-- HOURS (Around Line 429) -->
<h3>Hours</h3>
<p>Monday - Friday: 6 AM - 10 PM<br>Sat - Sun: 8 AM - 8 PM</p>
```

---

### 3. CHANGE COLOR THEME

**File**: `style.css` (Lines 7-17)

```css
:root {
    /* CHANGE THESE COLORS */
    --primary-color: #ff3333;      /* Red - change to your brand color */
    --secondary-color: #00d4ff;    /* Cyan - accent color */
    --accent-color: #ffd700;       /* Gold - highlight color */
    --dark-bg: #0a0e27;            /* Dark background */
    --darker-bg: #050810;          /* Darker background */
    --light-text: #ffffff;         /* Text color */
    --gray-text: #b0b8c8;          /* Secondary text */
}
```

**Example Color Palettes:**

*Blue Theme*:
```css
--primary-color: #0066ff;
--secondary-color: #00d4ff;
--accent-color: #ffd700;
```

*Green Theme*:
```css
--primary-color: #00ff88;
--secondary-color: #00ffff;
--accent-color: #ffaa00;
```

*Purple Theme*:
```css
--primary-color: #9d00ff;
--secondary-color: #00ffff;
--accent-color: #ff00ff;
```

---

### 4. UPDATE PRICING

**File**: `index.html` (Lines 310-380)

```html
<!-- STARTER PLAN -->
<div class="plan-card">
    <div class="plan-header">
        <h3>Starter</h3>
        <p class="plan-duration">Monthly</p>
    </div>
    <div class="plan-price">
        <span class="price-amount">$29</span>    <!-- CHANGE PRICE -->
        <span class="price-period">/month</span>
    </div>
    <ul class="plan-features">
        <!-- CHANGE FEATURES -->
        <li>✓ Gym Access (5 days/week)</li>
        <li>✓ Basic Equipment Usage</li>
        <li>✓ Locker Room Access</li>
        <li>✗ Personal Training</li>
        <li>✗ Premium Classes</li>
    </ul>
</div>
```

---

### 5. ADD OR REMOVE SERVICES

**File**: `index.html` (Lines 150-200)

```html
<!-- ADD NEW SERVICE -->
<div class="service-card" data-aos="fade-up" data-aos-delay="400">
    <div class="service-icon">🏊</div>  <!-- CHANGE EMOJI -->
    <h3>Swimming Pool</h3>              <!-- CHANGE NAME -->
    <p>Olympic-size swimming pool with professional coaching</p>  <!-- CHANGE DESCRIPTION -->
    <div class="card-overlay"></div>
</div>

<!-- TO REMOVE A SERVICE: DELETE THE ENTIRE service-card DIV -->
```

**Available Emojis**:
- 🏋️ Weights
- 🏃 Running/Cardio
- ⚔️ Combat/CrossFit
- 👤 Personal Training
- 🧘 Yoga
- 💪 Strength
- 🏊 Swimming
- 🚴 Cycling

---

### 6. CHANGE TRAINER INFORMATION

**File**: `index.html` (Lines 220-310)

```html
<div class="trainer-card">
    <!-- GRADIENT BACKGROUND -->
    <div class="trainer-image" style="background: linear-gradient(135deg, #ff6b6b, #ee5a6f);">
        <span class="trainer-initial">AK</span>  <!-- CHANGE INITIALS -->
    </div>
    <h3 class="trainer-name">Alex Kumar</h3>                <!-- CHANGE NAME -->
    <p class="trainer-specialty">Strength & Hypertrophy</p>  <!-- CHANGE SPECIALTY -->
    <div class="trainer-badges">
        <span class="badge">15+ Years</span>                 <!-- CHANGE EXPERIENCE -->
        <span class="badge">100+ Transformations</span>      <!-- CHANGE ACHIEVEMENT -->
    </div>
    <p class="trainer-bio">Certified personal trainer specializing in muscle building</p>  <!-- CHANGE BIO -->
</div>
```

**Gradient Color Combinations**:

Warm (Orange-Red):
```css
style="background: linear-gradient(135deg, #ff6b6b, #ee5a6f);"
```

Cool (Blue-Cyan):
```css
style="background: linear-gradient(135deg, #4ecdc4, #44a08d);"
```

Pink-Purple:
```css
style="background: linear-gradient(135deg, #f093fb, #f5576c);"
```

Yellow-Orange:
```css
style="background: linear-gradient(135deg, #fa709a, #fee140);"
```

Bright Green:
```css
style="background: linear-gradient(135deg, #00ff88, #00d4aa);"
```

---

### 7. CHANGE GOOGLE MAPS LOCATION

**File**: `index.html` (Around Line 431)

```html
<!-- CURRENT MAPS EMBED -->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!..." width="100%" height="400"></iframe>

<!-- HOW TO UPDATE: -->
<!-- 1. Go to Google Maps -->
<!-- 2. Find your gym location -->
<!-- 3. Click "Share" button -->
<!-- 4. Click "Embed a map" tab -->
<!-- 5. Copy the src URL from the iframe -->
<!-- 6. Replace the src URL above -->
```

---

### 8. CHANGE STATS/COUNTERS

**File**: `index.html` (Lines 100-125)

```html
<!-- CHANGE STAT NUMBERS -->
<h3 class="stat-number" data-target="5000">0</h3>        <!-- Change 5000 to your number -->
<p class="stat-label">Active Members</p>                  <!-- Change label -->

<!-- CHANGE WHAT IT COUNTS -->
<h3 class="stat-number" data-target="50">0</h3>
<p class="stat-label">Expert Trainers</p>

<h3 class="stat-number" data-target="15">0</h3>
<p class="stat-label">Years Experience</p>

<h3 class="stat-number" data-target="98">0</h3>
<p class="stat-label">Success Rate %</p>
```

---

### 9. CHANGE BUTTON TEXT

**File**: `index.html`

```html
<!-- HERO BUTTONS (Line 99) -->
<button class="btn btn-primary" onclick="scrollToSection('booking')">Join Now</button>
<button class="btn btn-secondary" onclick="scrollToSection('booking')">Book Free Trial</button>

<!-- PLAN BUTTONS (Lines 343, 364, 380) -->
<button class="btn btn-outline">Get Started</button>
<button class="btn btn-primary">Join Now</button>

<!-- FORM BUTTON (Line 396) -->
<button type="submit" class="btn btn-primary">Book Free Trial</button>
```

---

### 10. UPDATE TIME SLOTS

**File**: `index.html` (Lines 362-371)

```html
<select id="time" name="time" required>
    <option value="">Select a time slot</option>
    <option value="06:00 AM">06:00 AM</option>    <!-- ADD/REMOVE TIMES -->
    <option value="07:00 AM">07:00 AM</option>
    <option value="08:00 AM">08:00 AM</option>
    <option value="05:00 PM">05:00 PM</option>
    <option value="06:00 PM">06:00 PM</option>
    <option value="07:00 PM">07:00 PM</option>
    <option value="08:00 PM">08:00 PM</option>
</select>
```

---

### 11. UPDATE TRAINING PROGRAMS

**File**: `index.html` (Lines 374-383)

```html
<select id="program" name="program" required>
    <option value="">Select a program</option>
    <option value="strength">Strength Training</option>      <!-- CHANGE PROGRAMS -->
    <option value="cardio">Cardio & Endurance</option>
    <option value="crossfit">CrossFit</option>
    <option value="personal">Personal Training</option>
    <option value="yoga">Yoga & Flexibility</option>
    <option value="transformation">Body Transformation</option>
</select>
```

---

### 12. CHANGE FOOTER SOCIAL LINKS

**File**: `index.html` (Lines 455-462)

```html
<div class="social-links">
    <a href="https://facebook.com/yourpage" class="social-icon">f</a>
    <a href="https://twitter.com/yourpage" class="social-icon">𝕏</a>
    <a href="https://instagram.com/yourpage" class="social-icon">📷</a>
    <a href="https://youtube.com/yourpage" class="social-icon">▶</a>
</div>
```

---

## 🎨 CSS QUICK TWEAKS

### Change Button Hover Size
**File**: `style.css` (Line 331)

```css
.btn-primary:hover {
    transform: translateY(-3px) scale(1.05);  /* Change 1.05 to 1.15 for bigger scale */
}
```

### Change Animation Speed
**File**: `style.css` (Line 54)

```css
animation: slideDown 0.5s ease-out;  /* Change 0.5s to 1s for slower animation */
```

### Change Card Shadow
**File**: `style.css` (Line 483)

```css
box-shadow: 0 20px 50px rgba(255, 51, 51, 0.2);  /* Adjust numbers for stronger/weaker shadow */
```

---

## 📱 RESPONSIVE DESIGN ADJUSTMENTS

### Change Mobile Breakpoint
**File**: `style.css` (Lines 830-870)

```css
/* Current breakpoint: 768px */
@media (max-width: 768px) {
    /* Change 768px to your preferred size */
}

/* Change to 850px for example */
@media (max-width: 850px) {
    /* Styles for devices 850px and below */
}
```

---

## 🔗 LINK EXTERNAL PAGES

```html
<!-- In Navigation or Buttons -->
<a href="https://your-booking-system.com" class="btn btn-primary">Book Appointment</a>
<a href="tel:+1-555-123-4567" class="btn btn-secondary">Call Us</a>
<a href="mailto:info@yourgym.com" class="btn btn-outline">Email Us</a>
```

---

## ✅ CUSTOMIZATION CHECKLIST

- [ ] Change gym name everywhere
- [ ] Update contact information
- [ ] Change color theme
- [ ] Update pricing
- [ ] Add/remove services
- [ ] Update trainer profiles
- [ ] Change Google Maps location
- [ ] Update stats numbers
- [ ] Change button text
- [ ] Update time slots
- [ ] Update programs
- [ ] Add social media links
- [ ] Test on mobile devices
- [ ] Proofread all content
- [ ] Deploy to web server

---

**Need help? Check the main README.md for more details!**
