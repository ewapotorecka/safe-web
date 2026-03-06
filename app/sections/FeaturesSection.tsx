import {
  AlertTriangle,
  Bell,
  Heart,
  MapPin,
  Shield,
  Users
} from "feather-icons-react";
import { HomeCopy } from "./types";

const featureIcons = [
  <Shield key="shield" />,
  <Users key="users" />,
  <Bell key="bell" />,
  <MapPin key="location" />,
  <Heart key="heart" />,
  <AlertTriangle key="alert" />
];

type FeaturesSectionProps = {
  t: HomeCopy;
};

export function FeaturesSection({ t }: FeaturesSectionProps) {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="features-title">
      <div className="max-w-2xl" data-reveal>
        <h2 id="features-title" className="text-3xl font-display font-semibold md:text-4xl">
          {t.features.title}
        </h2>
        <p className="mt-4 text-white/70">{t.features.subtitle}</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.features.cards.map((card, index) => (
          <article
            key={card.title}
            className="glass card-lift rounded-3xl p-6 transition hover:shadow-card"
            data-reveal
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <div className="flex items-center gap-3 text-mint">
              <div className="h-11 w-11 rounded-2xl bg-mint/15 flex items-center justify-center">
                {featureIcons[index]}
              </div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            </div>
            <p className="mt-4 text-sm text-white/70">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
