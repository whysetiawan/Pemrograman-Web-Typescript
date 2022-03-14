function helloWorld(args: string[]): string {
  return "Hello from " + args;
}

helloWorld(["1", "2", "3"]);

function helloWorld2(args: any): string {
  return "Hello" + args;
}

const helloArrow = (args: string): string => {
  return "Hello" + args;
};
