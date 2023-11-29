export default function card() {
  return (
    <div className="w-[300px] rounded-lg bg-white md:w-[600px]">
      <div className="flex w-full items-center justify-center rounded-t-lg bg-gray-400 text-6xl md:h-[400px]">
        <img
          className="rounded-t-lg"
          src="https://picsum.photos/id/5/600/400"
          alt=""
        />
      </div>
      <div className="p-4 text-left ">
        <h1 className="md:text-2xl">Titolo del post</h1>
        <p className="my-4 text-sm md:text-base">
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
