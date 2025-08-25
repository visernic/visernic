import html from './index.html';

export default {
  async fetch(request, env, ctx) {
    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
}

