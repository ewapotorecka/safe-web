import { HomeCopy } from "./types";

type FooterSectionProps = {
  t: HomeCopy;
};

export function FooterSection({ t }: FooterSectionProps) {
  return (
    <footer className="border-t border-white/5 pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <a href="/privacy" className="transition hover:text-white">
            {t.footer.privacy}
          </a>
          <a href="/terms" className="transition hover:text-white">
            {t.footer.terms}
          </a>
          <a href="/delete-account" className="transition hover:text-white">
            {t.footer.deleteAccount}
          </a>
          <a href="/support" className="transition hover:text-white">
            {t.footer.support}
          </a>
          <a href="/contact" className="transition hover:text-white">
            {t.footer.contact}
          </a>
        </div>
        <p>{t.footer.rights}</p>
        <a href="https://www.producthunt.com/products/safe-4/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-safe&#0045;4" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1244328&theme=light" alt="Safe - One&#0032;tap&#0032;to&#0032;tell&#0032;everyone&#0032;you&#0039;re&#0032;okay | Product Hunt" style={{ width: "250px", height: "54px" }} width="250" height="54" /></a>      </div>
    </footer>
  );
}
