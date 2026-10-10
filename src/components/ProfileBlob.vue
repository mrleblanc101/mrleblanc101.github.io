<template>
    <svg viewBox="0 0 1000 1040" role="img" :aria-label="alt">
        <defs>
            <clipPath id="profile-blob-reveal">
                <!-- Body: only visible inside the blob -->
                <path :d="frames[0]">
                    <animate v-if="!reducedMotion" v-bind="animation" />
                </path>
                <!-- Head: everything above the chin line is always visible -->
                <rect x="0" y="0" width="1000" :height="CHIN_Y" />
            </clipPath>
        </defs>
        <path class="fill-zinc-200 dark:fill-zinc-900 transition-colors" :d="frames[0]">
            <animate v-if="!reducedMotion" v-bind="animation" />
        </path>
        <image :href="src" x="50" y="0" width="900" height="1204" clip-path="url(#profile-blob-reveal)" />
    </svg>
</template>

<script lang="ts" setup>
defineProps<{ alt: string }>();

const POINTS = 16; // control points on the outline
const FRAMES = 24; // keyframes per loop
const CHIN_Y = 560; // everything above this line is always visible (the head)
const DURATION = 16; // seconds per loop

// Circle (r=385) whose radius is modulated by sine waves: [frequency, amplitude, cycles per loop]
const RADIUS = 385;
const CENTER = { x: 500, y: 600 };
const WAVES = [
    [2, 0.05, 1],
    [3, 0.035, -2],
    [4, 0.015, 1],
];

const outline = (t: number) => {
    const pts = Array.from({ length: POINTS }, (_, i) => {
        const a = (2 * Math.PI * i) / POINTS - Math.PI / 2;
        const m = 1 + WAVES.reduce((sum, [f, amp, cyc]) => sum + amp * Math.sin(f * a + 2 * Math.PI * cyc * t + f), 0);
        return [CENTER.x + RADIUS * m * Math.cos(a), CENTER.y + RADIUS * m * Math.sin(a)];
    });
    // Catmull-Rom -> cubic Bezier
    const k = 0.18;
    const at = (i: number) => pts[(i + POINTS) % POINTS];
    const n = (v: number) => v.toFixed(1);
    let d = `M${n(pts[0][0])},${n(pts[0][1])}`;
    for (let i = 0; i < POINTS; i++) {
        const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)];
        d += ` C${n(p1[0] + (p2[0] - p0[0]) * k)},${n(p1[1] + (p2[1] - p0[1]) * k)}`;
        d += ` ${n(p2[0] - (p3[0] - p1[0]) * k)},${n(p2[1] - (p3[1] - p1[1]) * k)}`;
        d += ` ${n(p2[0])},${n(p2[1])}`;
    }
    return d + 'Z';
};

const frames = Array.from({ length: FRAMES }, (_, f) => outline(f / FRAMES));
const animation = {
    attributeName: 'd',
    dur: `${DURATION}s`,
    repeatCount: 'indefinite',
    values: [...frames, frames[0]].join(';'),
};

const reducedMotion = usePreferredReducedMotion().value === 'reduce';

const src = useImage()('/img/profil.png', { width: 1100, quality: 95, format: 'webp' });
</script>
