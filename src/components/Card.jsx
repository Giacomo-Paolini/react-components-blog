export default function card() {
  return (
    <div className="h-[600px] w-[600px] rounded-lg bg-white">
      <div className="flex h-[400px] w-full items-center justify-center rounded-t-lg bg-gray-400 text-6xl">
        <span>600 x 400</span>
      </div>
      <div className="p-4 text-left">
        <h1 className="text-2xl">Titolo del post</h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam
          ipsam laborum ex vel dicta nisi ratione saepe. Ducimus quasi, numquam
          atque ipsum maxime accusamus. Iste nihil quia consectetur alias.
        </p>
        <button className="bg-orange-400 p-2 text-sm text-white">
          LEGGI DI PIÙ
        </button>
      </div>
    </div>
  );
}
