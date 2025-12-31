export function TrustBar() {
  const accreditations = [
    { name: "Cognia", description: "Global accreditation" },
    { name: "Cambridge Assessment", description: "International Examinations" },
    { name: "Oxford AQA", description: "International GCSE" },
    { name: "Pearson Edexcel", description: "International Qualifications" },
  ];

  return (
    <section className="py-12 bg-secondary border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Accredited & Recognized By
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {accreditations.map((item) => (
            <div key={item.name} className="text-center">
              <p className="text-lg font-serif font-semibold text-foreground">
                {item.name}
              </p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}