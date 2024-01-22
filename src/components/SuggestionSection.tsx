import AllSuggestions from "./tables/userTables/SuggestionsTable";

const SuggestionSection = () => {
  return (
    <div className="py-5 px-6 w-full">
      <div className="text-lg md:text-2xl capitalize">Suggestions</div>
      <div className="rounded-md bg-white mb-4">
        {/* <div className="flex items-center justify-end">
          <Button label="Request Suggestion" onClick={() => setShow(!show)} />
        </div>{" "} */}
        <AllSuggestions />
      </div>
    </div>
  );
};

export default SuggestionSection;
