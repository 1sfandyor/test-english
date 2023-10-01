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
import Elementry from "./components/grammer/elementry"
import PreIntermediate from "./components/grammer/pre-intermediate"
import Intermediate from "./components/grammer/intermediate"
import UpperIntermediate from "./components/grammer/upper-intermediate"
import PreAdvenced from "./components/grammer/pre-advenced"
import LisElementry from "./components/listening/elementry"
import LisPreIntermediate from "./components/listening/pre-intermediate"
import LisIntermediate from "./components/listening/intermediate"
import LisUpperIntermediate from "./components/listening/upper-intermediate"
import LisPreAdvenced from "./components/listening/pre-advenced"
import RidElementry from "./components/reading/elementry"
import RidPreIntermediate from "./components/reading/pre-intermediate"
import RidIntermediate from "./components/reading/intermediate"
import RidUpperIntermediate from "./components/reading/upper-intermediate"
import RidPreAdvenced from "./components/reading/pre-advenced"
import UsElementry from './components/useofenglish/elementry'
import UsPreIntermediate from './components/useofenglish/pre-intermediate'
import UsIntermediate from './components/useofenglish/intermediate'
import UsUpperIntermediate from './components/useofenglish/upper-intermediate'
import UsPreAdvenced from './components/useofenglish/pre-advenced'
import WrElementry from './components/writing/elementry'
import WrPreIntermediate from "./components/writing/pre-intermediate"
import WrIntermediate from "./components/writing/intermediate"
import WrUpperIntermediate from "./components/writing/upper-intermediate"
import WrPreAdvenced from "./components/writing/pre-advenced"
import ExmElementry from './components/exams/elementry'
import ExmPreIntermediate from './components/exams/pre-intermediate'
import ExmIntermediate from './components/exams/intermediate'
import ExmUpperIntermediate from './components/exams/upper-intermediate'
import ExmPreAdvenced from './components/exams/pre-advenced'
import ToBe from "./components/grammer-topics/elementry/to-be"
import ThisThatThose from "./components/grammer-topics/elementry/this"
import PossiveAdjactives from "./components/grammer-topics/elementry/possive-adjactives"
import Plurals from "./components/grammer-topics/elementry/a-an"
import Adjactives from "./components/grammer-topics/elementry/adjactives"
import PresentSimple from "./components/grammer-topics/elementry/present-simple"
import Questions from "./components/grammer-topics/elementry/questions"
import Adverbes from "./components/grammer-topics/elementry/adverbes"
import ObjectPronouns from "./components/grammer-topics/elementry/object-pronouns"
import WhosePossessive from "./components/grammer-topics/elementry/whose-possessive"
import AtInOnTime from "./components/grammer-topics/elementry/at-in-on-time"
import Prepositions from "./components/grammer-topics/elementry/prepositions"
import CanCant from "./components/grammer-topics/elementry/can-cant"
import PresentCountinous from "./components/grammer-topics/elementry/present-countinous"
import SimpleCountinous from "./components/grammer-topics/elementry/simple-countinous"
import DontTalk from "./components/grammer-topics/elementry/dont-talk"
import WasWere from "./components/grammer-topics/elementry/was-were"
import SimpleRegularInregular from "./components/grammer-topics/elementry/simple-regular-inregular"
import SimpleNegativQuestions from "./components/grammer-topics/elementry/simple-negative-questions"
import VerbsIng from "./components/grammer-topics/elementry/verbs-ing"
import HaveGot from "./components/grammer-topics/elementry/have-got"
import WouldLike from "./components/grammer-topics/elementry/would-like"
import CountableUncountable from "./components/grammer-topics/elementry/countble-uncountble"
import There from "./components/grammer-topics/elementry/there"
import ThereOrIt from "./components/grammer-topics/elementry/there-or-it"
import ToWards from "./components/grammer-topics/elementry/towards"
import MuchMony from "./components/grammer-topics/elementry/much-mony"
import ComprativeAdjectives from "./components/grammer-topics/elementry/comprative-adjectives"
import SuperlativeAdjectives from "./components/grammer-topics/elementry/superlative-adjectives"
import WillAndShall from "./components/grammer-topics/elementry/willandshall"
import BeGoing from "./components/grammer-topics/elementry/be-going"
import TheOneArticle from "./components/grammer-topics/elementry/the-one-article"
import AndOrButSo from "./components/grammer-topics/elementry/and-or-but-so"
import BasicWordOrder from "./components/grammer-topics/elementry/basic-word-order"
import AskQuestions from "./components/grammer-topics/pre-intermediate/asking-questions"
import SubjectQuestions from "./components/grammer-topics/pre-intermediate/subject-questions"
import PresentSimpleCountinous from "./components/grammer-topics/pre-intermediate/present-simple-countinous"
import PastSimpleForm from "./components/grammer-topics/pre-intermediate/past-simple-form-use"
import PastSimplePastCountinous from "./components/grammer-topics/pre-intermediate/past-simple-past-countinous"
import Purpose from "./components/grammer-topics/pre-intermediate/purpose-to-for"
import TimeConnecters from "./components/grammer-topics/pre-intermediate/time-connecters"
import WillVsBeGoing from "./components/grammer-topics/pre-intermediate/will-vs-be-going"
import PresentCountinousFeture from "./components/grammer-topics/pre-intermediate/present-countinous-future"
import WhoWhichWhere from "./components/grammer-topics/pre-intermediate/present-countinous-future"
import PresentPerfect from "./components/grammer-topics/pre-intermediate/present-perfect"
import PresentPerfectPastSimple from "./components/grammer-topics/pre-intermediate/present-perfect-past-simple"
import SomethingAnything from "./components/grammer-topics/pre-intermediate/something-anything-nothing"
import CompSupAdjectives from "./components/grammer-topics/pre-intermediate/comperlative-superlative-adjectives"
import PreMuchMony from "./components/grammer-topics/pre-intermediate/much-mony"
import PreMuchMonyLittleFew from "./components/grammer-topics/pre-intermediate/much-mony-little-few-some"
import MostOfTheMost from "./components/grammer-topics/pre-intermediate/most-of-the-most"
import InfinitivesAndGerunds from "./components/grammer-topics/pre-intermediate/infinitives-and-gerunds"
import UseVerb from "./components/grammer-topics/pre-intermediate/use-verb"
import HaveTo from "./components/grammer-topics/pre-intermediate/HaveTo"
import ShouldShouldnt from "./components/grammer-topics/pre-intermediate/should-shouldnt"
import FeatureTime from "./components/grammer-topics/pre-intermediate/feature-time"
import Pronouns from "./components/grammer-topics/pre-intermediate/pronouns"
import SecondConditional from "./components/grammer-topics/pre-intermediate/second-conditional"
import PreSimplePast from "./components/grammer-topics/pre-intermediate/pre-past-simple"
import UsedTo from "./components/grammer-topics/pre-intermediate/used-to"
import MightNot from "./components/grammer-topics/pre-intermediate/might-not"
import PropirtiesOfMovent from "./components/grammer-topics/pre-intermediate/propirties-of-movent"


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grammer" element={<Grammar/>} />
        <Route path="/listening" element={<Listening/>} />
        <Route path="/reading" element={<Reading/>} />
        <Route path="/useofenglish" element={<UseOfEnglish/>} />
        <Route path="/writing" element={<Writing/>} />
        <Route path="/exams" element={<Exams/>} />
        <Route path="/grammer/a1" element={<Elementry />} />
        <Route path="/grammer/a2" element={<PreIntermediate />} />
        <Route path="/grammer/b1" element={<Intermediate />} />
        <Route path="/grammer/b1+" element={<UpperIntermediate />} />
        <Route path="/grammer/b2" element={<PreAdvenced />} />
        <Route path="/listening/a1" element={<LisElementry />} />
        <Route path="/listening/a2" element={<LisPreIntermediate />} />
        <Route path="/listening/b1" element={<LisIntermediate />} />
        <Route path="/listening/b1+" element={<LisUpperIntermediate />} />
        <Route path="/listening/b2" element={<LisPreAdvenced />} />
        <Route path="/reading/a1" element={<RidElementry />} />
        <Route path="/reading/a2" element={<RidPreIntermediate />} />
        <Route path="/reading/b1" element={<RidIntermediate />} />
        <Route path="/reading/b1+" element={<RidUpperIntermediate />} />
        <Route path="/reading/b2" element={<RidPreAdvenced />} />
        <Route path="/useofenglish/a1" element={<UsElementry />} />
        <Route path="/useofenglish/a2" element={<UsPreIntermediate />} />
        <Route path="/useofenglish/b1" element={<UsIntermediate />} />
        <Route path="/useofenglish/b1+" element={<UsUpperIntermediate />} />
        <Route path="/useofenglish/b2" element={<UsPreAdvenced />} />
        <Route path="/writing/a1" element={<WrElementry />} /> 
        <Route path="/writing/a2" element={<WrPreIntermediate />} /> 
        <Route path="/writing/b1" element={<WrIntermediate />} /> 
        <Route path="/writing/b1+" element={<WrUpperIntermediate />} /> 
        <Route path="/writing/b2" element={<WrPreAdvenced />} /> 
        <Route path="/exams/a2" element={<ExmElementry />} />
        <Route path="/exams/b1" element={<ExmPreIntermediate />} />
        <Route path="/exams/b2" element={<ExmIntermediate />} />
        <Route path="/exams/ielts" element={<ExmUpperIntermediate />} />
        <Route path="/exams/toefl-ibt" element={<ExmPreAdvenced />} />
        <Route path="/grammer/a1/to-be" element={<ToBe />} />
        <Route path="/grammer/a1/this-that-these-those" element={<ThisThatThose />} />
        <Route path="/grammer/a1/possive-adjectives" element={<PossiveAdjactives />} />
        <Route path="/grammer/a1/a-an-plurals" element={<Plurals />} />
        <Route path="/grammer/a1/adjectives" element={<Adjactives />} />
        <Route path="/grammer/a1/present-simple" element={<PresentSimple />} />
        <Route path="/grammer/a1/questions" element={<Questions />} />
        <Route path="/grammer/a1/adverbs-frequency" element={<Adverbes />} />
        <Route path="/grammer/a1/object-pronouns" element={<ObjectPronouns />} />
        <Route path="/grammer/a1/whose-possessive-s" element={<WhosePossessive />} />
        <Route path="/grammer/a1/at-in-on-prepositions-time" element={<AtInOnTime />} />
        <Route path="/grammer/a1/at-in-on-prepositions-of-place" element={<Prepositions />} />
        <Route path="/grammer/a1/can-cant" element={<CanCant />} />
        <Route path="/grammer/a1/present-continuous" element={<PresentCountinous />} />
        <Route path="/grammer/a1/present-simple-present-continuous" element={<SimpleCountinous />} />
        <Route path="/grammer/a1/imperative-sit-dont-talk" element={<DontTalk />} />
        <Route path="/grammer/a1/was-were" element={<WasWere />} />
        <Route path="/grammer/a1/past-simple-regular-irregular" element={<SimpleRegularInregular />} />
        <Route path="/grammer/a1/past-simple-negatives-questions" element={<SimpleNegativQuestions />} />
        <Route path="/grammer/a1/verbs-infinitive-verbs-ing" element={<VerbsIng />} />
        <Route path="/grammer/a1/would-like" element={<WouldLike />} />
        <Route path="/grammer/a1/have-got" element={<HaveGot />} />
        <Route path="/grammer/a1/a-some-any-countable-uncountable" element={<CountableUncountable />} />
        <Route path="/grammer/a1/there-is-there-are" element={<There />} />
        <Route path="/grammer/a1/there-it" element={<ThereOrIt />} />
        <Route path="/grammer/a1/next-to-under-between-in-front-behind-etc" element={<ToWards />} />
        <Route path="/grammer/a1/much-many-lot-little-few" element={<MuchMony />} />
        <Route path="/grammer/a1/comparative-adjectives" element={<ComprativeAdjectives />} />
        <Route path="/grammer/a1/superlative-adjectives" element={<SuperlativeAdjectives />} />
        <Route path="/grammer/a1/will-and-shall" element={<WillAndShall />} />
        <Route path="/grammer/a1/be-going-to-plans-predictions" element={<BeGoing />} />
        <Route path="/grammer/a1/adverbs-manner" element={<BeGoing />} />
        <Route path="/grammer/a1/a-an-the-no-article" element={<TheOneArticle />} />
        <Route path="/grammer/a1/conjunctions_and-but-or-so-because" element={<AndOrButSo />} />
        <Route path="/grammer/a1/basic-word-order-in-english" element={<BasicWordOrder />} />
        <Route path="/grammer/a2/asking-questions-in-english" element={<AskQuestions />} />
        <Route path="/grammer/a2/subject-questions-questions-preposition" element={<SubjectQuestions />} />
        <Route path="/grammer/a2/present-simple-continuous" element={<PresentSimpleCountinous />} />
        <Route path="/grammer/a2/past-simple-form-use" element={<PastSimpleForm />} />
        <Route path="/grammer/a2/past-continuous-past-simple" element={<PastSimplePastCountinous />} />
        <Route path="/grammer/a2/purpose-to-for" element={<Purpose />} />
        <Route path="/grammer/a2/however-although-time-connectors" element={<TimeConnecters />} />
        <Route path="/grammer/a2/will-vs-be-going-to" element={<WillVsBeGoing />} />
        <Route path="/grammer/a2/present-continuous-future-arrangements" element={<PresentCountinousFeture />} />
        <Route path="/grammer/a2/defining-relative-clauses-who-which-that-where" element={<WhoWhichWhere />} />
        <Route path="/grammer/a2/present-perfect" element={<PresentPerfect />} />
        <Route path="/grammer/a2/present-perfect-or-past-simple" element={<PresentPerfectPastSimple />} />
        <Route path="/grammer/a2/something-anything-nothing-etc" element={<SomethingAnything />} />
        <Route path="/grammer/a2/comparative-superlative-adjectives-adverbs" element={<CompSupAdjectives />} />
        <Route path="/grammer/a2/too-too-much-too-many-enough" element={<PreMuchMony />} />
        <Route path="/grammer/a2/much-many-little-few-some-any" element={<PreMuchMonyLittleFew />} />
        <Route path="/grammer/a2/most-most-of-the-most" element={<MostOfTheMost />} />
        <Route path="/grammer/a2/infinitives-and-gerunds" element={<InfinitivesAndGerunds />} />
        <Route path="/grammer/a2/use-verb-go-english" element={<UseVerb />} />
        <Route path="/grammer/a2/have-to-dont-have-to-must-mustnt" element={<HaveTo />} />
        <Route path="/grammer/a2/should-shouldnt" element={<ShouldShouldnt />} />
        <Route path="/grammer/a2/first-conditional-future-time-clauses" element={<FeatureTime />} />
        <Route path="/grammer/a2/subject-pronouns-object-pronouns-possessive-pronouns-possessive-adjectives" element={<Pronouns />} />
        <Route path="/grammer/a2/second-conditional" element={<SecondConditional />} />
        <Route path="/grammer/a2/present-past-simple-passive" element={<PreSimplePast />} />
        <Route path="/grammer/a2/used-to" element={<UsedTo />} />
        <Route path="/grammer/a2/might-might-not" element={<MightNot />} />
        <Route path="/grammer/a2/prepositions-of-movement" element={<PropirtiesOfMovent />} />
      </Routes> 
      <Footer />
    </Router>
  )
}



export default App
