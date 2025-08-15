import SCFAQ from "@/components/sc-faq";
import ScSeeInAction from "@/components/sc-see-in-action";
import ScTransformIdeas from "@/components/sc-transforming-ideas";
import ScTrustedCloudInnovators from "@/components/sc-trusted-cloud-innovators";
import ScWhoForStacKConsole from "@/components/sc-who-for-stackconsole";

const Page = () => {
  return (
    <div>
      <h1>Home Test page</h1>
      <ScTrustedCloudInnovators/>
      <ScTransformIdeas/>
      <ScSeeInAction/>
      <ScWhoForStacKConsole/>
      <SCFAQ />
    </div>
  );
};

export default Page;
