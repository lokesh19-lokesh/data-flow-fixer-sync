
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-vibrant-lavender/20 to-vibrant-mint/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
                Your Journey to Transformation Starts Here
              </h2>
              <p className="font-lato text-lg text-muted-foreground mb-6 leading-relaxed">
                With over a decade of experience in transformational therapy and personal development, 
                I've helped thousands of individuals break through their limiting beliefs and create 
                extraordinary lives.
              </p>
              <p className="font-lato text-lg text-muted-foreground mb-6 leading-relaxed">
                My approach combines cutting-edge neuroscience with time-tested therapeutic techniques, 
                creating powerful and lasting change that goes beyond traditional coaching methods.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-vibrant-pink rounded-full mr-4"></div>
                  <span className="font-lato text-foreground">Certified Rapid Transformational Therapy Practitioner</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-vibrant-gold rounded-full mr-4"></div>
                  <span className="font-lato text-foreground">International Speaker & Best-Selling Author</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-vibrant-teal rounded-full mr-4"></div>
                  <span className="font-lato text-foreground">Featured in Leading Publications Worldwide</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="bg-gradient-coral rounded-2xl p-8 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional coach"
                    className="rounded-xl w-full h-96 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
