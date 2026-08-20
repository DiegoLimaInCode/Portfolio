import { profile } from "../../data/profile";

export function StackMarquee() {
  return (
    <div className="stack-marquee" aria-label="Stack técnica principal">
      <div className="stack-marquee-track">
        <div className="stack-marquee-group">
          {profile.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="stack-marquee-group" aria-hidden="true">
          {profile.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </div>
  );
}
