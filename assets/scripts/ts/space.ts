class TimerHighlighter {
  private element: HTMLElement;
  private timerId: number | null;

  constructor(elementId: string) {
    this.element = document.getElementById(elementId) as HTMLElement;
    this.timerId = null;

    this.setupListeners();
  }

  private setupListeners(): void {
    document.addEventListener("keydown", () => this.resetTimer());
    this.startTimer();
  }

  private startTimer(): void {
    this.timerId = setTimeout(() => {
      this.element.style.opacity = "0"; // Устанавливаем желаемый уровень непрозрачности (в данном случае, 0.5)
    }, 10000);
  }

  private resetTimer(): void {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    this.element.style.opacity = "1"; // Возвращаем полную непрозрачность
    this.startTimer();
  }
}

// Создаем экземпляр класса с указанием ID элемента
const timerHighlighter = new TimerHighlighter("whitespaceID");
