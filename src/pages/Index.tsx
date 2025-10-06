import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-blue rounded"></div>
            <span className="text-2xl font-bold text-[#1A1A1A]">TECH GLOBAL</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-[#1A1A1A] hover:text-primary transition-colors">Solutions</a>
            <a href="#services" className="text-[#1A1A1A] hover:text-primary transition-colors">Services</a>
            <a href="#industries" className="text-[#1A1A1A] hover:text-primary transition-colors">Industries</a>
            <a href="#about" className="text-[#1A1A1A] hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-[#1A1A1A] hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="hidden md:inline-flex">Get Started</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 gradient-blue text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 border-4 border-white/30 rounded-lg flex items-center justify-center">
                <Icon name="Cpu" size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Blue to Gradient Sample
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your business with cutting-edge technology solutions. We deliver innovation that drives growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-[#1A1A1A] border-white hover:bg-white/90">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#1A1A1A]">Our Solutions</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to meet your business needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Cloud" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">Cloud Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Scalable cloud infrastructure and migration services for modern businesses
                </p>
                <a href="#" className="text-primary font-semibold hover:underline">Learn more →</a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Database" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">Digital Computing</h3>
                <p className="text-muted-foreground mb-4">
                  High-performance computing solutions for data-intensive applications
                </p>
                <a href="#" className="text-primary font-semibold hover:underline">Learn more →</a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">Transformation</h3>
                <p className="text-muted-foreground mb-4">
                  Digital transformation strategies to modernize your business operations
                </p>
                <a href="#" className="text-primary font-semibold hover:underline">Learn more →</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#1A1A1A]">Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            End-to-end technology services tailored to your industry
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Code", title: "Development", desc: "Custom software development" },
              { icon: "Shield", title: "Security", desc: "Cybersecurity solutions" },
              { icon: "Users", title: "Consulting", desc: "IT strategy consulting" },
              { icon: "Zap", title: "Integration", desc: "System integration services" }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-[#1A1A1A]">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#1A1A1A]">Industries We Serve</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Specialized solutions across multiple sectors
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Building2", title: "Finance", desc: "Banking and financial services technology" },
              { icon: "Heart", title: "Healthcare", desc: "Digital health and medical systems" },
              { icon: "ShoppingBag", title: "Retail", desc: "E-commerce and retail solutions" }
            ].map((industry, idx) => (
              <Card key={idx} className="border-2 hover:border-accent transition-all">
                <CardContent className="p-8">
                  <Icon name={industry.icon as any} size={32} className="text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-[#1A1A1A]">About Tech Global</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We are a leading technology company dedicated to delivering innovative solutions that transform businesses. With over a decade of experience, we combine technical expertise with industry knowledge to drive digital transformation.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team of experts works closely with clients to understand their unique challenges and deliver customized solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 gradient-blue text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to transform your business? Let's discuss how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1A1A] text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-blue rounded"></div>
                <span className="text-xl font-bold">TECH GLOBAL</span>
              </div>
              <p className="text-white/70 text-sm">
                Innovative technology solutions for modern businesses
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Computing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transformation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>© 2025 Tech Global. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
