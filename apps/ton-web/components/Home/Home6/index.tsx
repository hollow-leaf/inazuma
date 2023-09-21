import featuresData from "./featureData";
import SectionTitle from "./SectionTitle";
import SingleFeature from "./Singlefeature";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="py-16 md:py-20 lg:py-28 bg-black mx-auto">
        <div className="container bg-black mx-auto">
          <SectionTitle
            title="Our Solutions"
            paragraph=""
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
