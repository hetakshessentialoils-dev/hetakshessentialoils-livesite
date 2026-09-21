import type { CleanProductPage, FaqItem } from "@/lib/types";
import { page as aniseOil, faqs as aniseOilFaqs } from "./anise-oil";
import { faqs as almondOilFaqs } from "./almond-oil";
import { faqs as arganOilFaqs } from "./argan-oil";
import { faqs as batanaOilFaqs } from "./batana-oil";
import { faqs as blackSeedOilFaqs } from "./black-seed-oil";
import { faqs as castorOilFaqs } from "./castor-oil";
import { faqs as peppermintOilFaqs } from "./peppermint-oil";
import { faqs as sawPalmettoBerryExtractFaqs } from "./saw-palmetto-berry-extract";
import { faqs as sesameOilFaqs } from "./sesame-oil";
import { faqs as teaTreeOilFaqs } from "./tea-tree-oil";
import { page as ajwainOil, faqs as ajwainOilFaqs } from "./ajwain-oil";
import { page as arachisOil, faqs as arachisOilFaqs } from "./arachis-oil";
import { page as amlaOil, faqs as amlaOilFaqs } from "./amla-oil";
import { page as aloeVeraOil, faqs as aloeVeraOilFaqs } from "./aloe-vera-oil";
import { page as apricotOil, faqs as apricotOilFaqs } from "./apricot-oil";
import { page as avocadoOil, faqs as avocadoOilFaqs } from "./avocado-oil";
import { page as blackPepperOil, faqs as blackPepperOilFaqs } from "./black-pepper-oil";
import { page as bergamotOil, faqs as bergamotOilFaqs } from "./bergamot-oil";
import { page as boisDeRoseOil, faqs as boisDeRoseOilFaqs } from "./bois-de-rose-oil";
import { page as blackCurrantSeedOil, faqs as blackCurrantSeedOilFaqs } from "./black-currant-seed-oil";
import { page as borageOil, faqs as borageOilFaqs } from "./borage-oil";
import { page as cardamomOil, faqs as cardamomOilFaqs } from "./cardamom-oil";
import { page as calamusOil, faqs as calamusOilFaqs } from "./calamus-oil";
import { page as cajeputOil, faqs as cajeputOilFaqs } from "./cajeput-oil";
import { page as carrotOil, faqs as carrotOilFaqs } from "./carrot-oil";
import { page as cloveOil, faqs as cloveOilFaqs } from "./clove-oil";
import { page as calendulaOil, faqs as calendulaOilFaqs } from "./calendula-oil";
import { page as cassiaOil, faqs as cassiaOilFaqs } from "./cassia-oil";
import { page as cedarwoodOil, faqs as cedarwoodOilFaqs } from "./cedarwood-oil";
import { page as chamomileOil, faqs as chamomileOilFaqs } from "./chamomile-oil";
import { page as cinnamonOil, faqs as cinnamonOilFaqs } from "./cinnamon-oil";
import { page as citronellaOil, faqs as citronellaOilFaqs } from "./citronella-oil";
import { page as clarySageOil, faqs as clarySageOilFaqs } from "./clary-sage-oil";
import { page as coffeeBeanOil, faqs as coffeeBeanOilFaqs } from "./coffee-bean-oil";
import { page as corianderOil, faqs as corianderOilFaqs } from "./coriander-oil";
import { page as cucumberOil, faqs as cucumberOilFaqs } from "./cucumber-oil";
import { page as cuminSeedOil, faqs as cuminSeedOilFaqs } from "./cumin-seed-oil";
import { page as dillOil, faqs as dillOilFaqs } from "./dill-oil";
import { page as eucalyptusOil, faqs as eucalyptusOilFaqs } from "./eucalyptus-oil";
import { page as eveningPrimroseOil, faqs as eveningPrimroseOilFaqs } from "./evening-primrose-oil";
import { page as extraVirginOliveOil, faqs as extraVirginOliveOilFaqs } from "./extra-virgin-olive-oil";
import { page as fennelOil, faqs as fennelOilFaqs } from "./fennel-oil";
import { page as fenugreekOil, faqs as fenugreekOilFaqs } from "./fenugreek-oil";
import { page as flaxseedOil, faqs as flaxseedOilFaqs } from "./flaxseed-oil";
import { page as frankincenseOil, faqs as frankincenseOilFaqs } from "./frankincense-oil";
import { page as garlicOil, faqs as garlicOilFaqs } from "./garlic-oil";
import { page as grapefruitOil, faqs as grapefruitOilFaqs } from "./grapefruit-oil";
import { page as geraniumOil, faqs as geraniumOilFaqs } from "./geranium-oil";
import { page as gingerOil, faqs as gingerOilFaqs } from "./ginger-oil";
import { page as grapeseedOil, faqs as grapeseedOilFaqs } from "./grapeseed-oil";
import { page as hazelnutOil, faqs as hazelnutOilFaqs } from "./hazelnut-oil";
import { page as hempSeedOil, faqs as hempSeedOilFaqs } from "./hemp-seed-oil";
import { page as holyBasilOil, faqs as holyBasilOilFaqs } from "./holy-basil-oil";
import { page as jojobaOil, faqs as jojobaOilFaqs } from "./jojoba-oil";
import { page as juniperOil, faqs as juniperOilFaqs } from "./juniper-oil";
import { page as lavenderOil, faqs as lavenderOilFaqs } from "./lavender-oil";
import { page as lemonOil, faqs as lemonOilFaqs } from "./lemon-oil";
import { page as lemongrassOil, faqs as lemongrassOilFaqs } from "./lemongrass-oil";
import { page as limeOil, faqs as limeOilFaqs } from "./lime-oil";
import { page as mandarinOil, faqs as mandarinOilFaqs } from "./mandarin-oil";
import { page as marjoramOil, faqs as marjoramOilFaqs } from "./marjoram-oil";
import { page as menthaOil, faqs as menthaOilFaqs } from "./mentha-oil";
import { page as moringaOil, faqs as moringaOilFaqs } from "./moringa-oil";
import { page as muskmelonOil, faqs as muskmelonOilFaqs } from "./muskmelon-oil";
import { page as myrtleOil, faqs as myrtleOilFaqs } from "./myrtle-oil";
import { page as neroliOil, faqs as neroliOilFaqs } from "./neroli-oil";
import { page as niaouliOil, faqs as niaouliOilFaqs } from "./niaouli-oil";
import { page as nutmegOil, faqs as nutmegOilFaqs } from "./nutmeg-oil";
import { page as oliveOil, faqs as oliveOilFaqs } from "./olive-oil";
import { page as onionOil, faqs as onionOilFaqs } from "./onion-oil";
import { page as orangeOil, faqs as orangeOilFaqs } from "./orange-oil";
import { page as oreganoOil, faqs as oreganoOilFaqs } from "./oregano-oil";

export const CLEAN_PRODUCT_PAGES: Record<string, CleanProductPage> = {
  "anise-oil": aniseOil,
  "ajwain-oil": ajwainOil,
  "arachis-oil": arachisOil,
  "amla-oil": amlaOil,
  "aloe-vera-oil": aloeVeraOil,
  "apricot-oil": apricotOil,
  "avocado-oil": avocadoOil,
  "black-pepper-oil": blackPepperOil,
  "bergamot-oil": bergamotOil,
  "bois-de-rose-oil": boisDeRoseOil,
  "black-currant-seed-oil": blackCurrantSeedOil,
  "borage-oil": borageOil,
  "cardamom-oil": cardamomOil,
  "calamus-oil": calamusOil,
  "cajeput-oil": cajeputOil,
  "carrot-oil": carrotOil,
  "clove-oil": cloveOil,
  "calendula-oil": calendulaOil,
  "cassia-oil": cassiaOil,
  "cedarwood-oil": cedarwoodOil,
  "chamomile-oil": chamomileOil,
  "cinnamon-oil": cinnamonOil,
  "citronella-oil": citronellaOil,
  "clary-sage-oil": clarySageOil,
  "coffee-bean-oil": coffeeBeanOil,
  "coriander-oil": corianderOil,
  "cucumber-oil": cucumberOil,
  "cumin-seed-oil": cuminSeedOil,
  "dill-oil": dillOil,
  "eucalyptus-oil": eucalyptusOil,
  "evening-primrose-oil": eveningPrimroseOil,
  "extra-virgin-olive-oil": extraVirginOliveOil,
  "fennel-oil": fennelOil,
  "fenugreek-oil": fenugreekOil,
  "flaxseed-oil": flaxseedOil,
  "frankincense-oil": frankincenseOil,
  "garlic-oil": garlicOil,
  "grapefruit-oil": grapefruitOil,
  "geranium-oil": geraniumOil,
  "ginger-oil": gingerOil,
  "grapeseed-oil": grapeseedOil,
  "hazelnut-oil": hazelnutOil,
  "hemp-seed-oil": hempSeedOil,
  "holy-basil-oil": holyBasilOil,
  "jojoba-oil": jojobaOil,
  "juniper-oil": juniperOil,
  "lavender-oil": lavenderOil,
  "lemon-oil": lemonOil,
  "lemongrass-oil": lemongrassOil,
  "lime-oil": limeOil,
  "mandarin-oil": mandarinOil,
  "marjoram-oil": marjoramOil,
  "mentha-oil": menthaOil,
  "moringa-oil": moringaOil,
  "muskmelon-oil": muskmelonOil,
  "myrtle-oil": myrtleOil,
  "neroli-oil": neroliOil,
  "niaouli-oil": niaouliOil,
  "nutmeg-oil": nutmegOil,
  "olive-oil": oliveOil,
  "onion-oil": onionOil,
  "orange-oil": orangeOil,
  "oregano-oil": oreganoOil,
};

export const PRODUCT_FAQS: Record<string, FaqItem[]> = {
  "almond-oil": almondOilFaqs,
  "argan-oil": arganOilFaqs,
  "batana-oil": batanaOilFaqs,
  "black-seed-oil": blackSeedOilFaqs,
  "castor-oil": castorOilFaqs,
  "peppermint-oil": peppermintOilFaqs,
  "saw-palmetto-berry-extract": sawPalmettoBerryExtractFaqs,
  "sesame-oil": sesameOilFaqs,
  "tea-tree-oil": teaTreeOilFaqs,
  "anise-oil": aniseOilFaqs,
  "ajwain-oil": ajwainOilFaqs,
  "arachis-oil": arachisOilFaqs,
  "amla-oil": amlaOilFaqs,
  "aloe-vera-oil": aloeVeraOilFaqs,
  "apricot-oil": apricotOilFaqs,
  "avocado-oil": avocadoOilFaqs,
  "black-pepper-oil": blackPepperOilFaqs,
  "bergamot-oil": bergamotOilFaqs,
  "bois-de-rose-oil": boisDeRoseOilFaqs,
  "black-currant-seed-oil": blackCurrantSeedOilFaqs,
  "borage-oil": borageOilFaqs,
  "cardamom-oil": cardamomOilFaqs,
  "calamus-oil": calamusOilFaqs,
  "cajeput-oil": cajeputOilFaqs,
  "carrot-oil": carrotOilFaqs,
  "clove-oil": cloveOilFaqs,
  "calendula-oil": calendulaOilFaqs,
  "cassia-oil": cassiaOilFaqs,
  "cedarwood-oil": cedarwoodOilFaqs,
  "chamomile-oil": chamomileOilFaqs,
  "cinnamon-oil": cinnamonOilFaqs,
  "citronella-oil": citronellaOilFaqs,
  "clary-sage-oil": clarySageOilFaqs,
  "coffee-bean-oil": coffeeBeanOilFaqs,
  "coriander-oil": corianderOilFaqs,
  "cucumber-oil": cucumberOilFaqs,
  "cumin-seed-oil": cuminSeedOilFaqs,
  "dill-oil": dillOilFaqs,
  "eucalyptus-oil": eucalyptusOilFaqs,
  "evening-primrose-oil": eveningPrimroseOilFaqs,
  "extra-virgin-olive-oil": extraVirginOliveOilFaqs,
  "fennel-oil": fennelOilFaqs,
  "fenugreek-oil": fenugreekOilFaqs,
  "flaxseed-oil": flaxseedOilFaqs,
  "frankincense-oil": frankincenseOilFaqs,
  "garlic-oil": garlicOilFaqs,
  "grapefruit-oil": grapefruitOilFaqs,
  "geranium-oil": geraniumOilFaqs,
  "ginger-oil": gingerOilFaqs,
  "grapeseed-oil": grapeseedOilFaqs,
  "hazelnut-oil": hazelnutOilFaqs,
  "hemp-seed-oil": hempSeedOilFaqs,
  "holy-basil-oil": holyBasilOilFaqs,
  "jojoba-oil": jojobaOilFaqs,
  "juniper-oil": juniperOilFaqs,
  "lavender-oil": lavenderOilFaqs,
  "lemon-oil": lemonOilFaqs,
  "lemongrass-oil": lemongrassOilFaqs,
  "lime-oil": limeOilFaqs,
  "mandarin-oil": mandarinOilFaqs,
  "marjoram-oil": marjoramOilFaqs,
  "mentha-oil": menthaOilFaqs,
  "moringa-oil": moringaOilFaqs,
  "muskmelon-oil": muskmelonOilFaqs,
  "myrtle-oil": myrtleOilFaqs,
  "neroli-oil": neroliOilFaqs,
  "niaouli-oil": niaouliOilFaqs,
  "nutmeg-oil": nutmegOilFaqs,
  "olive-oil": oliveOilFaqs,
  "onion-oil": onionOilFaqs,
  "orange-oil": orangeOilFaqs,
  "oregano-oil": oreganoOilFaqs,
};
