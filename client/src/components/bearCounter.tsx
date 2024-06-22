import useBearCounterStore from '@/store/bearCounterStore';
import { Button } from './ui/button';


export default function BearCounter() {
  const count = useBearCounterStore((state) => state.count);
  const increment = useBearCounterStore((state) => state.increment);
  const decrement = useBearCounterStore((state) => state.decrement);

  return (
    <div>
      <h1>{count} : count</h1>
      <Button onClick={increment}>Incre</Button>
      <Button onClick={decrement}>Decre</Button>
    </div>
    );
}

