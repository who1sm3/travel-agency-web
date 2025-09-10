import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-foreground text-balance">About WanderLux</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Founded in 2009, WanderLux has been at the forefront of luxury travel experiences, crafting
                unforgettable journeys for discerning travelers who seek more than just a vacation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our passion for travel and commitment to excellence has made us a trusted partner for thousands of
                travelers worldwide, creating memories that last a lifetime.
              </p>
            </div>
            <div className="relative">
              <div
                className="w-full h-96 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('/professional-travel-team-planning-trip-with-world-.jpg')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on strong principles that guide every aspect of our service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To inspire and enable extraordinary travel experiences that broaden perspectives, create lasting
                  memories, and connect people with the world's most beautiful destinations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world's most trusted and innovative travel agency, setting new standards for personalized
                  service and creating a global community of passionate travelers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Excellence, integrity, and genuine care for our customers drive everything we do. We believe in
                  sustainable travel that respects local cultures and environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced travel specialists are passionate about creating perfect journeys
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-48 h-48 bg-cover bg-center rounded-full mx-auto mb-6 shadow-lg"
                style={{
                  backgroundImage: "url('/professional-woman-travel-consultant-smiling-in-of.jpg')",
                }}
              ></div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Sarah Johnson</h3>
              <p className="text-primary font-medium mb-2">Founder & CEO</p>
              <p className="text-muted-foreground">
                With 20+ years in luxury travel, Sarah's vision has shaped WanderLux into the premier agency it is
                today.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-48 h-48 bg-cover bg-center rounded-full mx-auto mb-6 shadow-lg"
                style={{
                  backgroundImage: "url('/professional-man-travel-expert-with-world-map-back.jpg')",
                }}
              ></div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Michael Chen</h3>
              <p className="text-primary font-medium mb-2">Head of Operations</p>
              <p className="text-muted-foreground">
                Michael ensures every detail of your journey is perfectly orchestrated, from booking to your safe return
                home.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-48 h-48 bg-cover bg-center rounded-full mx-auto mb-6 shadow-lg"
                style={{
                  backgroundImage: "url('/professional-woman-travel-advisor-with-travel-broc.jpg')",
                }}
              ></div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Emma Rodriguez</h3>
              <p className="text-primary font-medium mb-2">Senior Travel Advisor</p>
              <p className="text-muted-foreground">
                Emma's expertise in exotic destinations and cultural experiences helps create truly authentic travel
                moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Recognition & Awards</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <h4 className="font-bold text-foreground">Best Travel Agency</h4>
              <p className="text-muted-foreground text-sm">Travel Excellence Awards 2023</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <h4 className="font-bold text-foreground">Customer Choice</h4>
              <p className="text-muted-foreground text-sm">Luxury Travel Magazine 2023</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <h4 className="font-bold text-foreground">Innovation Award</h4>
              <p className="text-muted-foreground text-sm">Global Travel Summit 2022</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <h4 className="font-bold text-foreground">Sustainability Leader</h4>
              <p className="text-muted-foreground text-sm">Eco Travel Alliance 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">WanderLux</h3>
            <p className="text-background/80 max-w-md mx-auto">
              Creating extraordinary travel experiences that inspire and delight our customers around the world.
            </p>
          </div>
          <div className="flex justify-center space-x-8 mb-8">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60">© 2024 WanderLux Travel Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
