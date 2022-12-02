const REQUEST_RESPONSE: Record<string, { message: string; timeout: number }> = {
  dish: {
    message: 'I LOVE Massa à bolonhesa',
    timeout: 1000,
  },
  name: {
    message: "You know my name, I'm  Joao",
    timeout: 5000,
  },
  trip: {
    message: 'I really want to go to Alaska',
    timeout: 8000,
  },
};

class SimpleService {
  private getAsyncTimeout(data: string, timeout: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), timeout);
    });
  }

  fetch(payload: { key: string }): Promise<string> {
    const response = REQUEST_RESPONSE[payload.key];
    return response
      ? this.getAsyncTimeout(response.message, response.timeout)
      : Promise.reject();
  }
}

export default new SimpleService();
