
import { Shield, Users, Award, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold">About FutureMerch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're revolutionizing the way you experience fashion with cutting-edge designs and sustainable practices.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h3 className="mt-4 text-xl font-semibold">Quality Assured</h3>
          <p className="mt-2 text-muted-foreground">
            Every product meets our high standards of quality and durability.
          </p>
        </div>
        <div className="text-center">
          <Users className="mx-auto h-12 w-12 text-primary" />
          <h3 className="mt-4 text-xl font-semibold">Customer First</h3>
          <p className="mt-2 text-muted-foreground">
            Your satisfaction is our top priority, with 24/7 support.
          </p>
        </div>
        <div className="text-center">
          <Award className="mx-auto h-12 w-12 text-primary" />
          <h3 className="mt-4 text-xl font-semibold">Award Winning</h3>
          <p className="mt-2 text-muted-foreground">
            Recognized for our innovative designs and quality.
          </p>
        </div>
        <div className="text-center">
          <Rocket className="mx-auto h-12 w-12 text-primary" />
          <h3 className="mt-4 text-xl font-semibold">Future Forward</h3>
          <p className="mt-2 text-muted-foreground">
            Always at the forefront of fashion technology.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold">Our Story</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Founded in 2024, FutureMerch began with a vision to merge fashion with technology. 
              Our journey started with a simple idea: create clothing that not only looks good but 
              also incorporates cutting-edge technology.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Today, we're proud to be at the forefront of fashion innovation, creating products 
              that push the boundaries of what's possible. Our commitment to sustainability and 
              ethical practices remains at the core of everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
