export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-neutral-200">
      <div className="grid w-full max-w-5xl grid-cols-1 border border-neutral-400 bg-white text-neutral-500">
        <div className="col-span-1 flex w-full flex-col items-center justify-center gap-4 border-b p-8">
          <div>Features</div>
          <h1 className="text-3xl">Built for Agentic Intelligence</h1>
          <p className="text-md font-semi-bold max-w-xl text-center">
            Build, test and deploy AI agents with a powerful visual interface designed for technical
            teams
          </p>
        </div>
        <div className="col-span-1 grid w-full grid-cols-1 divide-x divide-y text-center">
          <div className="grid grid-cols-2 divide-x col-span-1">
            <div className="col-span-1 p-10"></div>
            <div className="col-span-1 p-10"></div>
          </div>
          <div className="col-span-1 p-10"></div>
        </div>
      </div>
    </div>
  );
}
