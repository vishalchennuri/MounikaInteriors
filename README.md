
# Mounika Interiors - Interior Design Studio Website

## Overview
This is a modern, responsive website for Mounika Interiors, a fictional interior design studio. The site showcases the studio's expertise, projects, and services in an elegant and professional manner.

## Live Demo
The site is hosted at [https://lovable.dev/projects/1d49d485-7097-413c-bfe9-549cf3598988](https://lovable.dev/projects/1d49d485-7097-413c-bfe9-549cf3598988)

## Website Sections

### 1. Navigation
- The navigation bar is fixed at the top of the page
- It becomes solid and compact when scrolling down
- Contains links to all main sections of the website
- Responsive design with a mobile menu for smaller screens

### 2. Hero Section
- A large, visually appealing banner with a background image
- Features the company's tagline "Where Elegance meets Intention"
- Includes a call-to-action button to schedule a consultation

### 3. Expertise Section
- Showcases the studio's four main service areas:
  - Residential Design
  - Furniture Selection
  - Renovation & Styling
  - Kitchen & Bath Design
- Each service is presented with an image and short description
- Cards feature a hover effect revealing the description text

### 4. Projects Section
- Highlights the studio's signature projects
- Includes descriptive text about the design philosophy
- Features high-quality project images

### 5. Shop Section
- Displays furniture and decor items available for purchase
- Features a main highlighted product
- Includes a gallery of additional products with images, names, and prices

### 6. Testimonials Section
- Customer reviews and testimonials
- Each testimonial includes a customer photo, name, role, quote, and star rating
- Clean, card-based layout with subtle hover effects

### 7. About Section
- Explains the design philosophy of the studio
- Details the approach to interior design
- Combines informative text with relevant imagery

### 8. Why Us Section
- Lists five key reasons to choose Mounika Interiors
- Each point is presented with a check icon
- Features a supporting image
- Uses a contrasting background color for visual impact

### 9. Contact Section
- Includes a contact form with fields for name, email, subject, and message
- Displays contact information with icons (address, phone, email)
- Embeds a Google Maps location

### 10. Footer
- Company branding
- Location and contact details
- Social media links
- Copyright information and links to legal pages

## Technical Implementation

### Key Technologies
- **React**: For building the user interface
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling and responsive design
- **React Router**: For page navigation
- **Lucide React**: For icons
- **Vite**: As the build tool and development server

### Main Components
- **Navbar**: Navigation component that changes appearance on scroll
- **HeroSection**: Main banner with background image and headline
- **ExpertiseSection**: Grid layout of services with hover effects
- **ProjectsSection**: Text and image layout showcasing projects
- **ShopSection**: Product display with featured item and gallery
- **TestimonialsSection**: Customer reviews in card format
- **AboutSection**: Content and image layout explaining philosophy
- **WhyUsSection**: List of reasons with check icons and image
- **ContactSection**: Form and contact information layout
- **Footer**: Site-wide footer with multiple columns of information

### Animations and Effects
- **ScrollReveal**: Component for revealing elements as they enter the viewport
- **Hover effects**: Interactive feedback for buttons and cards
- **Smooth scrolling**: For anchor links to page sections
- **Fade-in animations**: For smoother page loading experience
- **Image zoom effects**: On certain images for visual interest

## Project Structure
- `src/components/`: Contains all React components
- `src/pages/`: Page-level components
- `src/index.css`: Global styles and Tailwind utility classes
- `src/App.tsx`: Main application component
- `src/main.tsx`: Entry point for the application

## Custom UI Elements
- **Buttons**: Custom styled buttons with hover effects
- **Cards**: Various card designs for different sections
- **Underline effects**: Elegant animated underlines for navigation links
- **Image hover effects**: Zoom and overlay effects for images

## Getting Started with Development

### Prerequisites
- Node.js and npm installed on your system

### Installation
1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server

### Making Changes
- Edit component files in `src/components/` to modify specific sections
- Update styles in `src/index.css` for global style changes
- Add new pages by creating files in `src/pages/` and adding routes in `App.tsx`

## Deployment
The site can be deployed using the "Publish" option in Lovable or by following standard deployment procedures for React applications.

## Additional Notes
- The website uses responsive design principles to work well on all device sizes
- Custom animations improve user experience and engagement
- The design emphasizes elegance and professionalism to match the brand identity
