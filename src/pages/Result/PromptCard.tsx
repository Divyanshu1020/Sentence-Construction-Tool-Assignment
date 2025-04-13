
interface PromptCardProps {
  number: number;
  total: number;
  prompt: string;
  response: string;
  isCorrect: boolean;
}

export default function PromptCard({
  number,
  total,
  prompt,
  response,
  isCorrect,
}: PromptCardProps) {
  return (
    <div className="border  overflow-hidden bg-white flex flex-col gap-4 rounded-2xl shadow-[0px_4px_70px_rgba(66,169,76,0.1)]">
      {/* Prompt section */}
      <div className="p-4 ">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium rounded-full px-2   text-[#616464] bg-[#F0F0F0]">
            Prompt
          </span>
          <span className="text-sm text-[#7C8181]">
            <span className="text-[#414343]">{number}</span>/<span>{total}</span>
          </span>
        </div>
        <p className="text-base text-[#414343] pl-2 pt-3">{prompt}</p>
      </div>

      {/* Response section */}
      <div className="p-4 bg-[#F6F9F9]">
        <div className="flex items-center mb-2">
          <span className="text-base font-medium text-[#616464] mr-2">
            Your response
          </span>
          <span
            className={`ttext-base px-2 py-0.5 rounded ${
              isCorrect
                ? "text-green-800 bg-[#EEFBEF] rounded-2xl "
                : "text-[#9E2930] bg-[#FCEBEC] rounded-2xl "
            }`}
          >
            {isCorrect ? "Correct" : "Incorrect"}
          </span>
        </div>
        <p className="text-base text-[#414343] pl-2">{response}</p>
      </div>
    </div>
  );
}
/* Frame 253 */

/* Frame 617 */

/* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 2px 4px;
// gap: 8px;

// width: 65px;
// height: 26px;

// /* Success/50 */
// background: #EEFBEF;
// border-radius: 16px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;


// /* Correct */

// width: 57px;
// height: 22px;

// /* Web/Normal Text Medium */
// font-family: 'Inter';
// font-style: normal;
// font-weight: 500;
// font-size: 16px;
// line-height: 22px;
// /* identical to box height, or 138% */
// letter-spacing: -0.01em;

// /* Success/600 */
// color: #317F39;


// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
/* Frame 617 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 2px 4px;
// gap: 8px;

// width: 76px;
// height: 26px;

// /* Error/50 */
// background: #FCEBEC;
// border-radius: 16px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;


// /* Incorrect */

// width: 68px;
// height: 22px;

// /* Web/Normal Text Medium */
// font-family: 'Inter';
// font-style: normal;
// font-weight: 500;
// font-size: 16px;
// line-height: 22px;
// /* identical to box height, or 138% */
// letter-spacing: -0.01em;

// /* Error/600 */
// color: #9E2930;


// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
