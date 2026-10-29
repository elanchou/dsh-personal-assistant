window.__ModuleLoader__.load({
  id: '@local/livekit-telegram-voice',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const NS = 'livekit-telegram-voice';
    const PANEL_ID = 'livekit-telegram-voice';
    const API = '/livekit-telegram/api';

    const dict = {
      en: {
        panel: 'Personal Assistant', title: 'Lucy', subtitle: 'Call the Telegram account, talk it through, hang up. The to-dos land here and DSH gets to work.',
        online: 'Voice online', offline: 'Voice offline', starting: 'Starting',
        tab_board: 'Board', tab_calls: 'Calls', tab_system: 'System',
        col_running: 'In progress', col_waiting: 'Needs you', col_done: 'Done', col_failed: 'Stopped',
        empty_board: 'No tasks yet', empty_hint: 'Call Lucy, tell her what to take care of, then hang up. Her to-do list shows up here as a task.',
        empty_col: 'Nothing here', open: 'Open session', dismiss: 'Remove', items: 'items', more: 'more',
        st_queued: 'Queued', st_running: 'Working', st_waiting: 'Needs your approval', st_done: 'Done', st_failed: 'Failed', st_stopped: 'Stopped',
        calls_active: 'On the line', calls_none: 'Nobody is on the line.', session: 'DSH session attached', waiting: 'Waiting for a request',
        events: 'Activity', noEvents: 'Nothing yet.',
        api: 'Control API', apiHint: 'Used by the Telegram gateway and the voice agent, with the bridge token.',
        agent: 'Agent name', allow: 'Allowed callers', creds: 'Bridge token', set: 'configured', unset: 'missing',
        gateway: 'Telegram gateway', voice: 'Voice agent', logs: 'Recent output', autoOff: 'Auto start is off in the plugin config.',
        w_running: 'running', w_preparing: 'preparing', w_blocked: 'waiting', w_backoff: 'restarting', w_failed: 'failed', w_stopped: 'stopped',
        loadError: 'Could not reach the plugin.', retry: 'Retry', ago: 'ago', now: 'just now',
        callMe: 'Call me', callMeBusy: 'Calling...', callMeSent: 'Ringing soon', callMeFail: 'Could not start the call',
        outbound: 'Calls from the assistant', outboundNone: 'No outgoing calls yet.', queued: 'queued', today: 'automatic calls in 24 h',
        blocked: 'Held back', o_answered: 'Answered', o_noanswer: 'No answer', o_busy: 'Busy', o_declined: 'Declined', o_error: 'Failed',
        o_manual: 'Call me', o_auto: 'Automatic', setup: 'Settings', needSetup: 'Add your Telegram user id to Allowed callers in the plugin settings to enable calls.',
      },
      zh: {
        panel: '私人助理', title: 'Lucy', subtitle: '给 Telegram 小号打电话，把事情说完就挂断。待办会出现在这里，DSH 随即开始处理。',
        online: '语音在线', offline: '语音离线', starting: '启动中',
        tab_board: '任务看板', tab_calls: '通话', tab_system: '系统',
        col_running: '进行中', col_waiting: '等你确认', col_done: '已完成', col_failed: '未完成',
        empty_board: '还没有任务', empty_hint: '打电话给 Lucy，告诉她要处理什么，然后挂断。她整理的待办会作为任务出现在这里。',
        empty_col: '暂无', open: '打开会话', dismiss: '移除', items: '项', more: '更多',
        st_queued: '排队中', st_running: '处理中', st_waiting: '等你批准', st_done: '已完成', st_failed: '失败', st_stopped: '已中止',
        calls_active: '正在通话', calls_none: '当前没有人在通话。', session: '已关联 DSH 会话', waiting: '等待指令',
        events: '动态', noEvents: '暂无动态。',
        api: '控制接口', apiHint: 'Telegram 网关和语音智能体用桥接令牌访问。',
        agent: '智能体名称', allow: '允许的来电者', creds: '桥接令牌', set: '已配置', unset: '缺失',
        gateway: 'Telegram 网关', voice: '语音智能体', logs: '最近输出', autoOff: '插件配置中已关闭自动启动。',
        w_running: '运行中', w_preparing: '准备中', w_blocked: '等待条件', w_backoff: '重启中', w_failed: '失败', w_stopped: '已停止',
        loadError: '无法连接插件。', retry: '重试', ago: '前', now: '刚刚',
        callMe: '打给我', callMeBusy: '呼叫中...', callMeSent: '马上来电', callMeFail: '无法发起通话',
        outbound: '助理打出的电话', outboundNone: '还没有打出过电话。', queued: '排队', today: '24 小时内自动来电',
        blocked: '暂缓原因', o_answered: '已接听', o_noanswer: '未接听', o_busy: '占线', o_declined: '已拒接', o_error: '失败',
        o_manual: '打给我', o_auto: '自动来电', setup: '设置', needSetup: '请在插件设置的"允许的来电者"里填入你的 Telegram 用户 ID,才能使用来电功能。',
      },
    };

    const CSS = `
.lkt{--lkt-accent:oklch(0.62 0.14 235);--lkt-ok:var(--dsw-alias-state-success-primary);--lkt-warn:var(--dsw-alias-state-warn-primary);--lkt-bad:var(--dsw-alias-state-error-primary);
 height:100%;overflow:auto;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font-size:13px;line-height:1.5}
.lkt *{box-sizing:border-box}
.lkt-wrap{max-width:1180px;margin:0 auto;padding:clamp(20px,4vw,40px) clamp(16px,4vw,40px) 56px;display:grid;gap:28px}
.lkt-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap}
.lkt-title{margin:0;font-size:clamp(26px,3.2vw,34px);font-weight:650;letter-spacing:-.02em;line-height:1.1}
.lkt-sub{margin:8px 0 0;max-width:46ch;color:var(--dsw-alias-label-secondary);font-size:13.5px;text-wrap:pretty}
.lkt-pill{display:inline-flex;align-items:center;gap:8px;padding:6px 12px 6px 10px;border-radius:999px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);font-size:12px;font-weight:550;white-space:nowrap}
.lkt-dot{width:8px;height:8px;border-radius:50%;background:var(--dsw-alias-state-idle-primary);flex:none}
.lkt-dot[data-on="1"]{background:var(--lkt-ok);box-shadow:0 0 0 0 color-mix(in oklch,var(--lkt-ok) 50%,transparent);animation:lkt-ping 2.4s cubic-bezier(.22,1,.36,1) infinite}
.lkt-dot[data-warn="1"]{background:var(--lkt-warn)}
@keyframes lkt-ping{0%{box-shadow:0 0 0 0 color-mix(in oklch,var(--lkt-ok) 45%,transparent)}70%,100%{box-shadow:0 0 0 7px transparent}}
.lkt-call{appearance:none;display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:999px;border:0;background:var(--lkt-accent);color:#fff;font:inherit;font-weight:600;cursor:pointer;transition:transform .18s cubic-bezier(.22,1,.36,1),opacity .18s}
.lkt-call:hover{transform:translateY(-1px)}.lkt-call:active{transform:translateY(0)}
.lkt-call[disabled]{opacity:.5;cursor:default;transform:none}
.lkt-call:focus-visible{outline:2px solid var(--lkt-accent);outline-offset:3px}
.lkt-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.lkt-note{color:var(--dsw-alias-label-secondary);font-size:12px}
.lkt-tabs{display:flex;gap:4px;border-bottom:1px solid var(--dsw-alias-border-l1)}
.lkt-tab{appearance:none;background:none;border:0;padding:10px 14px;margin-bottom:-1px;font:inherit;font-weight:550;color:var(--dsw-alias-label-secondary);cursor:pointer;border-bottom:2px solid transparent;transition:color .18s,border-color .18s}
.lkt-tab:hover{color:var(--dsw-alias-label-primary)}
.lkt-tab[aria-selected="true"]{color:var(--dsw-alias-label-primary);border-bottom-color:var(--lkt-accent)}
.lkt-tab:focus-visible,.lkt-btn:focus-visible,.lkt-card:focus-visible{outline:2px solid var(--lkt-accent);outline-offset:2px}
.lkt-count{margin-left:6px;font-size:11px;font-weight:600;padding:1px 6px;border-radius:999px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary)}
.lkt-board{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;align-items:start}
.lkt-col{display:grid;gap:10px;align-content:start;min-width:0}
.lkt-colhead{display:flex;align-items:center;gap:8px;padding:0 2px 6px;font-size:12px;font-weight:600;letter-spacing:.02em;color:var(--dsw-alias-label-secondary);border-bottom:1px solid var(--dsw-alias-border-l1)}
.lkt-colhead i{width:7px;height:7px;border-radius:2px;background:var(--c)}
.lkt-card{display:grid;gap:10px;padding:14px 14px 12px;border-radius:8px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l1);cursor:pointer;text-align:left;font:inherit;color:inherit;animation:lkt-in .42s cubic-bezier(.22,1,.36,1) both;animation-delay:calc(var(--i,0)*45ms);transition:border-color .18s,transform .18s,background .18s}
.lkt-card:hover{border-color:var(--dsw-alias-border-l2);transform:translateY(-1px)}
@keyframes lkt-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.lkt-ct{font-weight:600;font-size:13.5px;line-height:1.35;text-wrap:balance}
.lkt-todos{margin:0;padding:0;list-style:none;display:grid;gap:5px;color:var(--dsw-alias-label-secondary)}
.lkt-todos li{display:grid;grid-template-columns:14px 1fr;gap:8px;align-items:start}
.lkt-todos li::before{content:"";width:12px;height:12px;margin-top:3px;border-radius:3px;border:1.5px solid var(--dsw-alias-border-l2)}
.lkt-card[data-s="done"] .lkt-todos li::before{background:var(--lkt-ok);border-color:var(--lkt-ok)}
.lkt-sum{margin:0;padding:8px 10px;border-radius:6px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary);font-size:12px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-wrap:pretty}
.lkt-meta{display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--dsw-alias-label-secondary)}
.lkt-spin{width:10px;height:10px;border-radius:50%;border:1.5px solid var(--lkt-accent);border-top-color:transparent;animation:lkt-rot .8s linear infinite}
@keyframes lkt-rot{to{transform:rotate(360deg)}}
.lkt-sp{flex:1}
.lkt-btn{appearance:none;border:0;background:none;padding:2px 6px;border-radius:5px;font:inherit;font-size:11.5px;color:var(--dsw-alias-label-secondary);cursor:pointer;opacity:0;transition:opacity .15s,color .15s,background .15s}
.lkt-card:hover .lkt-btn,.lkt-card:focus-within .lkt-btn{opacity:1}
.lkt-btn:hover{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-2)}
.lkt-empty{padding:56px 20px;display:grid;justify-items:start;gap:10px;max-width:46ch}
.lkt-empty b{font-size:18px;font-weight:620;letter-spacing:-.01em}
.lkt-empty p{margin:0;color:var(--dsw-alias-label-secondary);text-wrap:pretty}
.lkt-none{padding:14px 2px;color:var(--dsw-alias-label-secondary);font-size:12px}
.lkt-cols2{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:36px}
.lkt-sec{display:grid;gap:12px;align-content:start}
.lkt-sec h3{margin:0;font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--dsw-alias-label-secondary)}
.lkt-row{display:flex;justify-content:space-between;gap:16px;padding:9px 0;border-bottom:1px solid var(--dsw-alias-border-l1)}
.lkt-row span:first-child{color:var(--dsw-alias-label-secondary)}
.lkt-row span:last-child{text-align:right;word-break:break-all}
.lkt-code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;word-break:break-all}
.lkt-ev{display:grid;grid-template-columns:64px 76px 1fr;gap:10px;padding:7px 0;border-bottom:1px solid var(--dsw-alias-border-l1);font-size:12px}
.lkt-ev time{color:var(--dsw-alias-label-secondary)}
.lkt-pre{margin:0;max-height:140px;overflow:auto;padding:10px;border-radius:6px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary);font-size:11px;white-space:pre-wrap;word-break:break-all}
.lkt-err{padding:20px 0;display:flex;gap:12px;align-items:center;color:var(--lkt-bad)}
@media (prefers-reduced-motion:reduce){.lkt *{animation:none!important;transition:none!important}}
`;

    function Icon({ size }) {
      return h('svg', {
        viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: 'currentColor',
        strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, style: { display: 'block' },
      }, h('rect', { x: 3.5, y: 4, width: 17, height: 5.5, rx: 1.5 }),
      h('rect', { x: 3.5, y: 11.5, width: 7.5, height: 8.5, rx: 1.5 }),
      h('rect', { x: 13, y: 11.5, width: 7.5, height: 5, rx: 1.5 }));
    }

    function ago(t, at) {
      const s = Math.max(0, Math.round((Date.now() - at) / 1000));
      if (s < 45) return t('now');
      const m = Math.round(s / 60);
      if (m < 60) return m + (t('ago') === '前' ? ' 分钟前' : 'm ' + t('ago'));
      const hr = Math.round(m / 60);
      if (hr < 24) return hr + (t('ago') === '前' ? ' 小时前' : 'h ' + t('ago'));
      const d = Math.round(hr / 24);
      return d + (t('ago') === '前' ? ' 天前' : 'd ' + t('ago'));
    }

    async function getJson(url, signal) {
      const response = await fetch(url, { signal, cache: 'no-store' });
      if (!response.ok) throw new Error(String(response.status));
      return response.json();
    }

    function usePoll(url, ms) {
      const [state, setState] = React.useState({});
      const [tick, setTick] = React.useState(0);
      React.useEffect(() => {
        const controller = new AbortController();
        const run = async () => {
          try { setState({ data: await getJson(url, controller.signal) }); }
          catch { if (!controller.signal.aborted) setState((s) => ({ data: s.data, failed: true })); }
        };
        void run();
        const timer = setInterval(run, ms);
        return () => { clearInterval(timer); controller.abort(); };
      }, [url, ms, tick]);
      return [state, () => setTick((n) => n + 1)];
    }

    const COLUMNS = [
      { key: 'running', states: ['queued', 'running'], color: 'var(--lkt-accent)' },
      { key: 'waiting', states: ['waiting'], color: 'var(--lkt-warn)' },
      { key: 'done', states: ['done'], color: 'var(--lkt-ok)' },
      { key: 'failed', states: ['failed', 'stopped'], color: 'var(--lkt-bad)' },
    ];

    function Card({ task, index, t, onDismiss, onOpen }) {
      const shown = task.todos.slice(0, 4);
      return h('div', {
        className: 'lkt-card', role: 'button', tabIndex: 0, 'data-s': task.state, style: { '--i': index },
        onClick: () => onOpen(task.sessionId),
        onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(task.sessionId); } },
      },
      h('div', { className: 'lkt-ct' }, task.title),
      h('ul', { className: 'lkt-todos' },
        shown.map((item, i) => h('li', { key: i }, item)),
        task.todos.length > shown.length ? h('li', { style: { opacity: 0.7 } }, '+' + (task.todos.length - shown.length) + ' ' + t('more')) : null),
      task.summary && (task.state === 'done' || task.state === 'failed') ? h('p', { className: 'lkt-sum' }, task.summary) : null,
      h('div', { className: 'lkt-meta' },
        task.state === 'running' ? h('span', { className: 'lkt-spin', 'aria-hidden': true }) : null,
        h('span', null, t('st_' + task.state)),
        h('span', null, '·'),
        h('span', null, ago(t, task.updatedAt || task.createdAt)),
        h('span', { className: 'lkt-sp' }),
        h('button', { className: 'lkt-btn', onClick: (e) => { e.stopPropagation(); onDismiss(task.id); } }, t('dismiss'))));
    }

    function Board({ t, ctx }) {
      const [state, refresh] = usePoll(API + '/tasks', 3000);
      const tasks = (state.data && state.data.tasks) || [];
      const open = (id) => { try { ctx.uiWorkspace.openSession(id); } catch { /* panel stays */ } };
      const dismiss = async (id) => {
        await fetch(API + '/tasks/dismiss', {
          method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ id }),
        }).catch(() => undefined);
        refresh();
      };
      if (state.failed && !state.data) return h('div', { className: 'lkt-err' }, t('loadError'), h('button', { className: 'lkt-btn', style: { opacity: 1 }, onClick: refresh }, t('retry')));
      if (state.data && tasks.length === 0) {
        return h('div', { className: 'lkt-empty' }, h('b', null, t('empty_board')), h('p', null, t('empty_hint')));
      }
      return h('div', { className: 'lkt-board' }, COLUMNS.map((col) => {
        const items = tasks.filter((task) => col.states.includes(task.state));
        return h('section', { key: col.key, className: 'lkt-col' },
          h('div', { className: 'lkt-colhead', style: { '--c': col.color } }, h('i'), t('col_' + col.key),
            h('span', { className: 'lkt-count' }, items.length)),
          items.length === 0 ? h('div', { className: 'lkt-none' }, t('empty_col'))
            : items.map((task, i) => h(Card, { key: task.id, task, index: i, t, onDismiss: dismiss, onOpen: open })));
      }));
    }

    function Row({ label, children }) {
      return h('div', { className: 'lkt-row' }, h('span', null, label), h('span', null, children));
    }

    function Outbound({ t, data }) {
      const o = data.outbound;
      if (!o) return null;
      return h('div', { className: 'lkt-sec' },
        h('h3', null, t('outbound')),
        h(Row, { label: t('today') }, String(o.autoCallsToday)),
        o.queued ? h(Row, { label: t('queued') }, String(o.queued)) : null,
        o.blockedBy ? h(Row, { label: t('blocked') }, o.blockedBy) : null,
        o.history.length === 0 ? h('div', { className: 'lkt-none' }, t('outboundNone'))
          : o.history.slice(0, 8).map((item, i) => h(Row, { key: i, label: new Date(item.at).toLocaleString([], { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' · ' + (item.manual ? t('o_manual') : t('o_auto')) },
            t('o_' + item.outcome))));
    }

    function Calls({ t, data }) {
      return h('div', { className: 'lkt-cols2' },
        h(Outbound, { t, data }),
        h('div', { className: 'lkt-sec' },
          h('h3', null, t('calls_active')),
          data.activeCalls.length === 0 ? h('div', { className: 'lkt-none' }, t('calls_none'))
            : data.activeCalls.map((call, i) => h(Row, { key: i, label: call.from + ' · ' + new Date(call.startedAt).toLocaleTimeString() },
              call.hasSession ? t('session') : t('waiting')))),
        h('div', { className: 'lkt-sec' },
          h('h3', null, t('events')),
          data.events.length === 0 ? h('div', { className: 'lkt-none' }, t('noEvents'))
            : data.events.slice(0, 14).map((event, i) => h('div', { key: i, className: 'lkt-ev' },
              h('time', null, new Date(event.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })),
              h('span', { style: { color: event.kind === 'error' ? 'var(--lkt-bad)' : 'var(--lkt-accent)', fontWeight: 600 } }, event.kind),
              h('span', { style: { wordBreak: 'break-word' } }, event.detail)))));
    }

    function System({ t, data }) {
      const services = [['gateway', 'gateway'], ['agent', 'voice']];
      return h('div', { className: 'lkt-cols2' },
        h('div', { className: 'lkt-sec' },
          h('h3', null, t('api')),
          h('code', { className: 'lkt-code' }, window.location.origin + data.apiPath),
          h('div', { style: { color: 'var(--dsw-alias-label-secondary)', fontSize: 12 } }, t('apiHint')),
          h(Row, { label: t('agent') }, data.agentName),
          h(Row, { label: t('allow') }, String(data.allowedCallers)),
          h(Row, { label: t('creds') }, h('span', { style: { display: 'inline-flex', gap: 8, alignItems: 'center' } },
            h('i', { className: 'lkt-dot', 'data-on': data.bridgeToken.configured ? 1 : 0, 'data-warn': data.bridgeToken.configured ? 0 : 1 }),
            data.bridgeToken.configured ? t('set') : t('unset')))),
        h('div', { className: 'lkt-sec' },
          data.autoStart === false ? h('div', { className: 'lkt-none' }, t('autoOff')) : null,
          data.workers && services.map(([key, label]) => {
            const svc = data.workers[key];
            if (!svc) return null;
            return h('div', { key, className: 'lkt-sec' },
              h('h3', null, t(label)),
              h(Row, { label: t('w_' + svc.state) }, svc.pid ? 'pid ' + svc.pid : ''),
              svc.reason ? h('div', { style: { color: 'var(--lkt-bad)', fontSize: 12 } }, svc.reason) : null,
              svc.logs.length ? h('pre', { className: 'lkt-pre' }, svc.logs.filter((l) => !l.includes('objc[')).slice(-5).map((l) => l.slice(0, 220)).join('\n')) : null);
          })));
    }

    function CallMe({ t, data, refresh }) {
      const [phase, setPhase] = React.useState('idle');
      const canCall = data && data.outbound && data.outbound.target === 'configured';
      const busy = phase === 'busy' || (data && data.outbound && (data.outbound.dialing || data.outbound.queued > 0)) || (data && data.activeCalls.length > 0);
      const press = async () => {
        setPhase('busy');
        try {
          const response = await fetch(API + '/call/me', {
            method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}',
          });
          setPhase(response.ok ? 'sent' : 'fail');
        } catch { setPhase('fail'); }
        refresh();
        setTimeout(() => setPhase('idle'), 4000);
      };
      if (!data) return null;
      return h('div', { className: 'lkt-actions' },
        h('button', { className: 'lkt-call', disabled: !canCall || busy, onClick: press },
          phase === 'busy' ? t('callMeBusy') : t('callMe')),
        !canCall ? h('span', { className: 'lkt-note' }, t('needSetup'))
          : phase === 'sent' ? h('span', { className: 'lkt-note' }, t('callMeSent'))
          : phase === 'fail' ? h('span', { className: 'lkt-note', style: { color: 'var(--lkt-bad)' } }, t('callMeFail')) : null);
    }

    function Page({ t, ctx }) {
      const [tab, setTab] = React.useState('board');
      const [status, refreshStatus] = usePoll(API + '/status', 4000);
      const [tasks] = usePoll(API + '/tasks', 6000);
      const data = status.data;
      const online = data && data.workers && data.workers.agent && data.workers.gateway
        && data.workers.agent.state === 'running' && data.workers.gateway.state === 'running';
      const starting = data && data.workers && !online
        && ['preparing', 'backoff', 'blocked'].some((s) => data.workers.agent.state === s || data.workers.gateway.state === s);
      const waiting = ((tasks.data && tasks.data.tasks) || []).filter((task) => task.state === 'waiting').length;
      const tabs = [['board', t('tab_board'), waiting], ['calls', t('tab_calls'), data ? data.activeCalls.length : 0], ['system', t('tab_system'), 0]];
      let body = null;
      if (tab === 'board') body = h(Board, { t, ctx });
      else if (status.failed && !data) body = h('div', { className: 'lkt-err' }, t('loadError'));
      else if (data) body = tab === 'calls' ? h(Calls, { t, data }) : h(System, { t, data });
      return h('div', { className: 'lkt' },
        h('style', null, CSS),
        h('div', { className: 'lkt-wrap' },
          h('header', { className: 'lkt-head' },
            h('div', null, h('h2', { className: 'lkt-title' }, (data && data.assistantName) || t('title')), h('p', { className: 'lkt-sub' }, t('subtitle'))),
            h('div', { className: 'lkt-actions' },
              h(CallMe, { t, data: online ? data : data && { ...data, outbound: { ...data.outbound, target: 'missing' } }, refresh: refreshStatus }),
              data ? h('span', { className: 'lkt-pill' },
                h('i', { className: 'lkt-dot', 'data-on': online ? 1 : 0, 'data-warn': starting ? 1 : 0 }),
                online ? t('online') : starting ? t('starting') : t('offline')) : null)),
          h('nav', { className: 'lkt-tabs', role: 'tablist' }, tabs.map(([key, label, count]) => h('button', {
            key, role: 'tab', className: 'lkt-tab', 'aria-selected': tab === key, onClick: () => setTab(key),
          }, label, count ? h('span', { className: 'lkt-count' }, count) : null))),
          body));
    }

    return {
      inject: ['slots', 'locale', 'uiWorkspace'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(NS, dict), 'livekit-telegram-voice: dictionaries');
        const t = ctx.locale.bind(NS);
        ctx.slots.inject('main', () => ctx.slots.register({
          name: 'main', key: PANEL_ID, locale: NS, inject: () => ({ t, ctx }),
        }, Page));
        ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
          name: 'sidebar.panellist', id: PANEL_ID, order: 20, locale: NS, label: () => t('panel'),
        }, Icon));
      },
    };
  },
});
