import { JSX } from 'react';
import SCHero from './SCHero';

const map: Record<string, (props: any) => JSX.Element | null> = {
  PageBuilderSectionsHeroLayout: (props) => <SCHero {...props} />,
};

export default function SectionRenderer({ sections }: { sections: any[] }) {
  return (
    <>
      {sections?.map((s, i) => {
        const Comp = map[s?.__typename as string];
        return Comp ? <Comp key={i} {...s} /> : null;
      })}
    </>
  );
}
