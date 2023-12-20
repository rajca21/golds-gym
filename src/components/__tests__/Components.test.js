import { render, cleanup } from "@testing-library/react";
import HeroBanner from "../HeroBanner";
import SearchExercises from "../SearchExercises";

afterEach(() => {
    cleanup();
})

describe(HeroBanner, () => {
    it("HeroBanner renders correctly", () => {
        const { getByText } = render(<HeroBanner />);
        expect(getByText("FITNESS CLUB")).toBeInTheDocument();
    });
});

describe(SearchExercises, () => {
    it("SearchExercises renders correctly", () => {
        const { getByText } = render(<SearchExercises />);
        expect(getByText("Search")).toBeInTheDocument();
    });
});
