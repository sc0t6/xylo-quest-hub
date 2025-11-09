import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "xXProGamer123Xx",
    rating: 5,
    text: "Best executor I've ever used! Super fast and never crashes. Been using it for months now.",
    initials: "PG"
  },
  {
    name: "RobloxMaster_YT",
    rating: 5,
    text: "Xylo is insane! Works perfectly on every game I've tried. The UI is so clean too!",
    initials: "RM"
  },
  {
    name: "ScriptKiddo",
    rating: 5,
    text: "Finally an executor that actually works. No viruses, no crashes. 10/10 would recommend!",
    initials: "SK"
  },
  {
    name: "BloxWarrior",
    rating: 5,
    text: "Switched from my old executor to Xylo and never looked back. This thing is a beast!",
    initials: "BW"
  },
  {
    name: "DevHacker_Pro",
    rating: 5,
    text: "The speed is incredible and it's so easy to use. Perfect for both beginners and pros.",
    initials: "DH"
  },
  {
    name: "GamingLegend2024",
    rating: 5,
    text: "I've tried everything and Xylo is hands down the best. Updates regularly too!",
    initials: "GL"
  }
];

const Reviews = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our community has to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarFallback className="bg-primary/20 text-primary font-bold">
                    {review.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{review.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
