"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Clock, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="blurBottom"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Book Now",
          id: "book",
        },
      ]}
      brandName="ELITE BARBERS"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlayTestimonial
      title="The sharpest cut. In five minutes."
      description="Premium cuts and invigorating shampoo by Rima. NYC's elite grooming experience."
      testimonials={[
        {
          name: "Michael T.",
          handle: "@michaelt",
          testimonial: "Rima is the best. Walked out looking like a million bucks.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/excited-young-male-barber-wearing-glasses-red-shirt-barber-apron-holding-barbering-tools-looking-camera-showing-thumb-up-isolated-blue-background_141793-138548.jpg",
        },
        {
          name: "Alex R.",
          handle: "@alexnyc",
          testimonial: "Precision like no other. I'm always out in five.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-apron-posing-with-coffee-machine-component_23-2148366661.jpg",
        },
        {
          name: "Sam K.",
          handle: "@samcut",
          testimonial: "Top tier quality and speed. Rima is a master of her craft.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-stylish-bearded-male-with-tattoo-arm-dressed-flannel-shirt-drinks-coffee-barbershop_613910-14697.jpg",
        },
        {
          name: "Daniel J.",
          handle: "@danjay",
          testimonial: "Found my new barber for life. Unbeatable precision.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-barber-shop-concept_23-2148506342.jpg",
        },
        {
          name: "Leo B.",
          handle: "@leob",
          testimonial: "Professional, clean, and lightning fast. Incredible work.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/latino-hair-salon-owner-preparing-clients_23-2150286080.jpg",
        },
      ]}
      buttons={[
        {
          text: "Book your $45 slot",
          href: "#book",
        },
        {
          text: "Meet Rima",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-male-self-care-setting-still-life_23-2150326541.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-bearded-man-getting-haircut-by-hairdresser-while-sitting-chair-barbershop-barber-soul_627829-6328.jpg",
          alt: "Client Portrait 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-bearded-male-with-long-hair-dark-background_613910-1758.jpg",
          alt: "Client Portrait 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-successful-businessman-posing-with-hand-chin_176420-1147.jpg",
          alt: "Client Portrait 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-bearded-male-with-long-hair-dark-background_613910-16017.jpg",
          alt: "Client Portrait 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/guy-barbershop_1157-7729.jpg",
          alt: "Client Portrait 5",
        },
      ]}
      avatarText="10,000+ satisfied New Yorkers"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Rima — The Eyeball Artist"
      description="With over a decade of high-end barbering experience in Manhattan, Rima uses her unique eyeball precision technique to guarantee symmetry and perfection every single time."
      bulletPoints={[
        {
          title: "Precision Cuts",
          description: "No rulers, just professional eye-measured precision.",
        },
        {
          title: "5-Minute Guarantee",
          description: "Efficient service without sacrificing quality.",
        },
        {
          title: "Premium Care",
          description: "Includes a revitalizing shampoo and hot towel finish.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-holding-cup-with-clipboard-white-background-high-quality-photo_114579-61160.jpg"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Precision Cut",
          description: "Fades, tapers, and scissor work tailored for your style.",
          imageSrc: "http://img.b2bpic.net/free-photo/hairdressing-equipment-assortment-top-view_23-2148352846.jpg",
        },
        {
          title: "Luxury Shampoo",
          description: "Invigorating scalp massage with premium organic products.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-senior-man-hairdresser-shop_23-2149220576.jpg",
        },
        {
          title: "5-Min Touch-Up",
          description: "Quick fix when you are on the go in NYC.",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-man-sitting-barbershop_1157-27165.jpg",
        },
      ]}
      title="Signature Experience"
      description="Comprehensive grooming for $45 flat."
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Happy Clients",
          value: "10,000+",
          icon: Users,
        },
        {
          id: "m2",
          title: "Avg. Service Time",
          value: "5 Mins",
          icon: Clock,
        },
        {
          id: "m3",
          title: "Service Rating",
          value: "5.0",
          icon: Star,
        },
      ]}
      title="Elite Standards"
      description="Performance metrics of our service."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Michael T.",
          role: "Client",
          company: "NYC",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-happy-man-smiling-street-kuala-lumpur-urban-men-clothing-style-soap-bubbles-fly-air_1321-2139.jpg",
        },
        {
          id: "2",
          name: "Sarah J.",
          role: "Client",
          company: "NYC",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-blond-bearded-male-dressed-suit-grey-background_613910-11862.jpg",
        },
        {
          id: "3",
          name: "David K.",
          role: "Client",
          company: "NYC",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/barber-preparing-man-face-shaving-with-hot-towel-face-barber-shop_1153-9646.jpg",
        },
        {
          id: "4",
          name: "Elena R.",
          role: "Client",
          company: "NYC",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-happy-smling-man-with-beard-pointing-left-advertisement-suggest-click-banner_176420-33735.jpg",
        },
        {
          id: "5",
          name: "Jason L.",
          role: "Client",
          company: "NYC",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-getting-his-hair-cut-barber-shop4_23-2149186458.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "5.0",
          label: "Average Rating",
        },
        {
          value: "99%",
          label: "Return Rate",
        },
        {
          value: "100%",
          label: "On-Time Service",
        },
      ]}
      title="Client Feedback"
      description="What our clients say about Rima."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "standard",
          badge: "Popular",
          price: "$45",
          subtitle: "Full Experience",
          features: [
            "Precision Cut",
            "Luxury Shampoo",
            "Hot Towel",
          ],
          buttons: [
            {
              text: "Book Now",
              href: "#book",
            },
          ],
        },
      ]}
      title="Straightforward Pricing"
      description="Premium grooming for one price."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do I need an appointment?",
          content: "Walk-ins are always welcome, but booking ensures your preferred time.",
        },
        {
          id: "f2",
          title: "How long does a cut take?",
          content: "Most full services are completed in under 20 minutes.",
        },
        {
          id: "f3",
          title: "Is shampoo included?",
          content: "Yes, every service comes with our luxury shampoo experience.",
        },
      ]}
      sideTitle="Questions?"
      sideDescription="Everything you need to know."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="book" data-section="book">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Booking"
      title="Secure your slot"
      description="Rima will confirm your appointment within minutes."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/barber-doing-haircut-bearded-aged-client-hair-salon_23-2148182013.jpg"
      logoText="ELITE BARBERS NYC"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
