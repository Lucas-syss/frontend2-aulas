class Post {
  title: string;
  content: string;
  datePublished: Date;
  
  constructor(title: string, content: string, datePublished: Date) {
    this.title = title;
    this.content = content;
    this.datePublished = datePublished;
  }
  
  gerarData() {
    console.log(Date.now());
  }
}

const post = new Post("Post 1", "Description", new Date());
console.log(post.title);
post.gerarData();

class News extends Post {
  gerarData(): void {
    const date = new Date().getFullYear();
    console.log(date);
  }
}

const news = new News("title", "Description", new Date());

function random<T>(valor: T): string {
  return String(valor);
}

const cenas1 = random<string>("Nome");
const cenas2 = random<number>(10);
const cenas3 = random<boolean>(true);
