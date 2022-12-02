class SimpleService {
  private getAsyncTimeout(timeout: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(timeout), timeout);
    });
  }

  fetch(payload?: { timeout?: number }): Promise<void | number> {
    if (!payload || typeof payload.timeout !== "number") {
      return Promise.reject();
    }

    return this.getAsyncTimeout(payload.timeout);
  }
}

export default new SimpleService();
