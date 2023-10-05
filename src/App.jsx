import HomePage from "./components/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Grammar from "./components/grammar"
import Listening from "./components/listening"
import Reading from "./components/reading"
import UseOfEnglish from "./components/useofenglish"
import Writing from "./components/writing"
import Exams from "./components/exams"
import Elementary from "./components/grammar/elementary"
import PreIntermediate from "./components/grammar/pre-intermediate"
import Intermediate from "./components/grammar/intermediate"
import UpperIntermediate from "./components/grammar/upper-intermediate"
import PreAdvanced from "./components/grammar/pre-advanced"
import LisElementary from "./components/listening/elementary"
import LisPreIntermediate from "./components/listening/pre-intermediate"
import LisIntermediate from "./components/listening/intermediate"
import LisUpperIntermediate from "./components/listening/upper-intermediate"
import LisPreAdvanced from "./components/listening/pre-advanced"
import RidElementary from "./components/reading/elementary"
import RidPreIntermediate from "./components/reading/pre-intermediate"
import RidIntermediate from "./components/reading/intermediate"
import RidUpperIntermediate from "./components/reading/upper-intermediate"
import RidPreAdvanced from "./components/reading/pre-advanced"
import UsElementary from './components/useofenglish/elementary'
import UsPreIntermediate from './components/useofenglish/pre-intermediate'
import UsIntermediate from './components/useofenglish/intermediate'
import UsUpperIntermediate from './components/useofenglish/upper-intermediate'
import UsPreAdvanced from './components/useofenglish/pre-advanced'
import WrElementary from './components/writing/elementary'
import WrPreIntermediate from "./components/writing/pre-intermediate"
import WrIntermediate from "./components/writing/intermediate"
import WrUpperIntermediate from "./components/writing/upper-intermediate"
import WrPreAdvanced from "./components/writing/pre-advanced"
import ExmElementary from './components/exams/elementary'
import ExmPreIntermediate from './components/exams/pre-intermediate'
import ExmIntermediate from './components/exams/intermediate'
import ExmUpperIntermediate from './components/exams/upper-intermediate'
import ExmPreAdvanced from './components/exams/pre-advanced'
import ToBe from "./components/grammar-topics/elementary/to-be"
import ThisThatThose from "./components/grammar-topics/elementary/this"
import PossessiveAdjectives from "./components/grammar-topics/elementary/possessive-adjectives"
import Plurals from "./components/grammar-topics/elementary/a-an"
import Adjectives from "./components/grammar-topics/elementary/adjectives"
import PresentSimple from "./components/grammar-topics/elementary/present-simple"
import Questions from "./components/grammar-topics/elementary/questions"
import Adverbs from "./components/grammar-topics/elementary/adverbs"
import ObjectPronouns from "./components/grammar-topics/elementary/object-pronouns"
import WhosePossessive from "./components/grammar-topics/elementary/whose-possessive"
import AtInOnTime from "./components/grammar-topics/elementary/at-in-on-time"
import Prepositions from "./components/grammar-topics/elementary/prepositions"
import CanCant from "./components/grammar-topics/elementary/can-cant"
import PresentCountinous from "./components/grammar-topics/elementary/present-countinous"
import SimpleCountinous from "./components/grammar-topics/elementary/simple-countinous"
import DontTalk from "./components/grammar-topics/elementary/dont-talk"
import WasWere from "./components/grammar-topics/elementary/was-were"
import SimpleRegularInregular from "./components/grammar-topics/elementary/simple-regular-inregular"
import SimpleNegativQuestions from "./components/grammar-topics/elementary/simple-negative-questions"
import VerbsIng from "./components/grammar-topics/elementary/verbs-ing"
import HaveGot from "./components/grammar-topics/elementary/have-got"
import WouldLike from "./components/grammar-topics/elementary/would-like"
import CountableUncountable from "./components/grammar-topics/elementary/countble-uncountble"
import There from "./components/grammar-topics/elementary/there"
import ThereOrIt from "./components/grammar-topics/elementary/there-or-it"
import ToWards from "./components/grammar-topics/elementary/towards"
import MuchMony from "./components/grammar-topics/elementary/much-mony"
import ComprativeAdjectives from "./components/grammar-topics/elementary/comprative-adjectives"
import SuperlativeAdjectives from "./components/grammar-topics/elementary/superlative-adjectives"
import WillAndShall from "./components/grammar-topics/elementary/willandshall"
import BeGoing from "./components/grammar-topics/elementary/be-going"
import TheOneArticle from "./components/grammar-topics/elementary/the-one-article"
import AndOrButSo from "./components/grammar-topics/elementary/and-or-but-so"
import BasicWordOrder from "./components/grammar-topics/elementary/basic-word-order"
import AskQuestions from "./components/grammar-topics/pre-intermediate/asking-questions"
import SubjectQuestions from "./components/grammar-topics/pre-intermediate/subject-questions"
import PresentSimpleCountinous from "./components/grammar-topics/pre-intermediate/present-simple-countinous"
import PastSimpleForm from "./components/grammar-topics/pre-intermediate/past-simple-form-use"
import PastSimplePastCountinous from "./components/grammar-topics/pre-intermediate/past-simple-past-countinous"
import Purpose from "./components/grammar-topics/pre-intermediate/purpose-to-for"
import TimeConnecters from "./components/grammar-topics/pre-intermediate/time-connecters"
import WillVsBeGoing from "./components/grammar-topics/pre-intermediate/will-vs-be-going"
import PresentCountinousFeture from "./components/grammar-topics/pre-intermediate/present-countinous-future"
import WhoWhichWhere from "./components/grammar-topics/pre-intermediate/present-countinous-future"
import PresentPerfect from "./components/grammar-topics/pre-intermediate/present-perfect"
import PresentPerfectPastSimple from "./components/grammar-topics/pre-intermediate/present-perfect-past-simple"
import SomethingAnything from "./components/grammar-topics/pre-intermediate/something-anything-nothing"
import CompSupAdjectives from "./components/grammar-topics/pre-intermediate/comperlative-superlative-adjectives"
import PreMuchMony from "./components/grammar-topics/pre-intermediate/much-mony"
import PreMuchMonyLittleFew from "./components/grammar-topics/pre-intermediate/much-mony-little-few-some"
import MostOfTheMost from "./components/grammar-topics/pre-intermediate/most-of-the-most"
import InfinitivesAndGerunds from "./components/grammar-topics/pre-intermediate/infinitives-and-gerunds"
import UseVerb from "./components/grammar-topics/pre-intermediate/use-verb"
import HaveTo from "./components/grammar-topics/pre-intermediate/HaveTo"
import ShouldShouldnt from "./components/grammar-topics/pre-intermediate/should-shouldnt"
import FeatureTime from "./components/grammar-topics/pre-intermediate/feature-time"
import Pronouns from "./components/grammar-topics/pre-intermediate/pronouns"
import SecondConditional from "./components/grammar-topics/pre-intermediate/second-conditional"
import PreSimplePast from "./components/grammar-topics/pre-intermediate/pre-past-simple"
import UsedTo from "./components/grammar-topics/pre-intermediate/used-to"
import MightNot from "./components/grammar-topics/pre-intermediate/might-not"
import PropirtiesOfMovent from "./components/grammar-topics/pre-intermediate/propirties-of-movent"


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grammar" element={<Grammar/>} />
        <Route path="/listening" element={<Listening/>} />
        <Route path="/reading" element={<Reading/>} />
        <Route path="/useofenglish" element={<UseOfEnglish/>} />
        <Route path="/writing" element={<Writing/>} />
        <Route path="/exams" element={<Exams/>} />
        <Route path="/grammar/a1" element={<Elementary />} />
        <Route path="/grammar/a2" element={<PreIntermediate />} />
        <Route path="/grammar/b1" element={<Intermediate />} />
        <Route path="/grammar/b1+" element={<UpperIntermediate />} />
        <Route path="/grammar/b2" element={<PreAdvanced />} />
        <Route path="/listening/a1" element={<LisElementary />} />
        <Route path="/listening/a2" element={<LisPreIntermediate />} />
        <Route path="/listening/b1" element={<LisIntermediate />} />
        <Route path="/listening/b1+" element={<LisUpperIntermediate />} />
        <Route path="/listening/b2" element={<LisPreAdvanced />} />
        <Route path="/reading/a1" element={<RidElementary />} />
        <Route path="/reading/a2" element={<RidPreIntermediate />} />
        <Route path="/reading/b1" element={<RidIntermediate />} />
        <Route path="/reading/b1+" element={<RidUpperIntermediate />} />
        <Route path="/reading/b2" element={<RidPreAdvanced />} />
        <Route path="/useofenglish/a1" element={<UsElementary />} />
        <Route path="/useofenglish/a2" element={<UsPreIntermediate />} />
        <Route path="/useofenglish/b1" element={<UsIntermediate />} />
        <Route path="/useofenglish/b1+" element={<UsUpperIntermediate />} />
        <Route path="/useofenglish/b2" element={<UsPreAdvanced />} />
        <Route path="/writing/a1" element={<WrElementary />} /> 
        <Route path="/writing/a2" element={<WrPreIntermediate />} /> 
        <Route path="/writing/b1" element={<WrIntermediate />} /> 
        <Route path="/writing/b1+" element={<WrUpperIntermediate />} /> 
        <Route path="/writing/b2" element={<WrPreAdvanced />} /> 
        <Route path="/exams/a2" element={<ExmElementary />} />
        <Route path="/exams/b1" element={<ExmPreIntermediate />} />
        <Route path="/exams/b2" element={<ExmIntermediate />} />
        <Route path="/exams/ielts" element={<ExmUpperIntermediate />} />
        <Route path="/exams/toefl-ibt" element={<ExmPreAdvanced />} />
        <Route path="/grammar/a1/to-be" element={<ToBe />} />
        <Route path="/grammar/a1/this-that-these-those" element={<ThisThatThose />} />
        <Route path="/grammar/a1/possessive-adjectives" element={<PossessiveAdjectives />} />
        <Route path="/grammar/a1/a-an-plurals" element={<Plurals />} />
        <Route path="/grammar/a1/adjectives" element={<Adjectives />} />
        <Route path="/grammar/a1/present-simple" element={<PresentSimple />} />
        <Route path="/grammar/a1/questions" element={<Questions />} />
        <Route path="/grammar/a1/adverbs-frequency" element={<Adverbs />} />
        <Route path="/grammar/a1/object-pronouns" element={<ObjectPronouns />} />
        <Route path="/grammar/a1/whose-possessive-s" element={<WhosePossessive />} />
        <Route path="/grammar/a1/at-in-on-prepositions-time" element={<AtInOnTime />} />
        <Route path="/grammar/a1/at-in-on-prepositions-of-place" element={<Prepositions />} />
        <Route path="/grammar/a1/can-cant" element={<CanCant />} />
        <Route path="/grammar/a1/present-continuous" element={<PresentCountinous />} />
        <Route path="/grammar/a1/present-simple-present-continuous" element={<SimpleCountinous />} />
        <Route path="/grammar/a1/imperative-sit-dont-talk" element={<DontTalk />} />
        <Route path="/grammar/a1/was-were" element={<WasWere />} />
        <Route path="/grammar/a1/past-simple-regular-irregular" element={<SimpleRegularInregular />} />
        <Route path="/grammar/a1/past-simple-negatives-questions" element={<SimpleNegativQuestions />} />
        <Route path="/grammar/a1/verbs-infinitive-verbs-ing" element={<VerbsIng />} />
        <Route path="/grammar/a1/would-like" element={<WouldLike />} />
        <Route path="/grammar/a1/have-got" element={<HaveGot />} />
        <Route path="/grammar/a1/a-some-any-countable-uncountable" element={<CountableUncountable />} />
        <Route path="/grammar/a1/there-is-there-are" element={<There />} />
        <Route path="/grammar/a1/there-it" element={<ThereOrIt />} />
        <Route path="/grammar/a1/next-to-under-between-in-front-behind-etc" element={<ToWards />} />
        <Route path="/grammar/a1/much-many-lot-little-few" element={<MuchMony />} />
        <Route path="/grammar/a1/comparative-adjectives" element={<ComprativeAdjectives />} />
        <Route path="/grammar/a1/superlative-adjectives" element={<SuperlativeAdjectives />} />
        <Route path="/grammar/a1/will-and-shall" element={<WillAndShall />} />
        <Route path="/grammar/a1/be-going-to-plans-predictions" element={<BeGoing />} />
        <Route path="/grammar/a1/adverbs-manner" element={<BeGoing />} />
        <Route path="/grammar/a1/a-an-the-no-article" element={<TheOneArticle />} />
        <Route path="/grammar/a1/conjunctions_and-but-or-so-because" element={<AndOrButSo />} />
        <Route path="/grammar/a1/basic-word-order-in-english" element={<BasicWordOrder />} />
        <Route path="/grammar/a2/asking-questions-in-english" element={<AskQuestions />} />
        <Route path="/grammar/a2/subject-questions-questions-preposition" element={<SubjectQuestions />} />
        <Route path="/grammar/a2/present-simple-continuous" element={<PresentSimpleCountinous />} />
        <Route path="/grammar/a2/past-simple-form-use" element={<PastSimpleForm />} />
        <Route path="/grammar/a2/past-continuous-past-simple" element={<PastSimplePastCountinous />} />
        <Route path="/grammar/a2/purpose-to-for" element={<Purpose />} />
        <Route path="/grammar/a2/however-although-time-connectors" element={<TimeConnecters />} />
        <Route path="/grammar/a2/will-vs-be-going-to" element={<WillVsBeGoing />} />
        <Route path="/grammar/a2/present-continuous-future-arrangements" element={<PresentCountinousFeture />} />
        <Route path="/grammar/a2/defining-relative-clauses-who-which-that-where" element={<WhoWhichWhere />} />
        <Route path="/grammar/a2/present-perfect" element={<PresentPerfect />} />
        <Route path="/grammar/a2/present-perfect-or-past-simple" element={<PresentPerfectPastSimple />} />
        <Route path="/grammar/a2/something-anything-nothing-etc" element={<SomethingAnything />} />
        <Route path="/grammar/a2/comparative-superlative-adjectives-adverbs" element={<CompSupAdjectives />} />
        <Route path="/grammar/a2/too-too-much-too-many-enough" element={<PreMuchMony />} />
        <Route path="/grammar/a2/much-many-little-few-some-any" element={<PreMuchMonyLittleFew />} />
        <Route path="/grammar/a2/most-most-of-the-most" element={<MostOfTheMost />} />
        <Route path="/grammar/a2/infinitives-and-gerunds" element={<InfinitivesAndGerunds />} />
        <Route path="/grammar/a2/use-verb-go-english" element={<UseVerb />} />
        <Route path="/grammar/a2/have-to-dont-have-to-must-mustnt" element={<HaveTo />} />
        <Route path="/grammar/a2/should-shouldnt" element={<ShouldShouldnt />} />
        <Route path="/grammar/a2/first-conditional-future-time-clauses" element={<FeatureTime />} />
        <Route path="/grammar/a2/subject-pronouns-object-pronouns-possessive-pronouns-possessive-adjectives" element={<Pronouns />} />
        <Route path="/grammar/a2/second-conditional" element={<SecondConditional />} />
        <Route path="/grammar/a2/present-past-simple-passive" element={<PreSimplePast />} />
        <Route path="/grammar/a2/used-to" element={<UsedTo />} />
        <Route path="/grammar/a2/might-might-not" element={<MightNot />} />
        <Route path="/grammar/a2/prepositions-of-movement" element={<PropirtiesOfMovent />} />
      </Routes> 
      <Footer />
    </Router>
  )
}



export default App
