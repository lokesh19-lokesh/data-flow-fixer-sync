
const ClientLogos = () => {
  const logos = [
    { name: "BBC", width: "80px" },
    { name: "Vogue", width: "100px" },
    { name: "Forbes", width: "90px" },
    { name: "Elle", width: "70px" },
    { name: "Harper's", width: "110px" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-lato text-muted-foreground text-lg">Trusted by leading publications</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {logos.map((logo) => (
            <div 
              key={logo.name}
              className="font-playfair text-2xl font-bold text-muted-foreground hover:text-primary transition-colors duration-300"
              style={{ width: logo.width }}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
