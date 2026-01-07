import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HTML_FILE = path.join(__dirname, '../public/portfolio/index.html');

async function fixScripts() {
  console.log('🔧 Fixing Framer script references...');
  
  let html = await fs.readFile(HTML_FILE, 'utf-8');
  
  // The Framer modules have internal dependencies that reference each other
  // We need to revert them back to the original Framer CDN URLs
  // This is because they import each other like: import {...} from "./rolldown-runtime.C0sJWP3_.mjs"
  
  const replacements = [
    // Module files - revert to original URLs
    ['/portfolio/assets/module_30_react.DoQILClF.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/react.DoQILClF.mjs'],
    ['/portfolio/assets/module_31_rolldown-runtime.C0sJWP3_.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/rolldown-runtime.C0sJWP3_.mjs'],
    ['/portfolio/assets/module_32_motion.Cb0kAMdr.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/motion.Cb0kAMdr.mjs'],
    ['/portfolio/assets/module_33_framer.-jNWEyCG.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/framer.-jNWEyCG.mjs'],
    ['/portfolio/assets/module_34_Ticker.DCR8bgLY.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/Ticker.DCR8bgLY.mjs'],
    ['/portfolio/assets/module_35_r1VqttKFg.DRHkGXs8.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/r1VqttKFg.DRHkGXs8.mjs'],
    ['/portfolio/assets/module_36_shared-lib.D_6BMd0P.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/shared-lib.D_6BMd0P.mjs'],
    ['/portfolio/assets/module_37_UX1yAjhR7.BLJVt8Ln.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/UX1yAjhR7.BLJVt8Ln.mjs'],
    ['/portfolio/assets/module_38_z-CCKsJKuwveWDkXLRquePOE-n8TQeUJLVM7dy15as8.Bs7RFyHc.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/z-CCKsJKuwveWDkXLRquePOE-n8TQeUJLVM7dy15as8.Bs7RFyHc.mjs'],
    ['/portfolio/assets/module_39_augiA20Il.srNak1b7.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/augiA20Il.srNak1b7.mjs'],
    ['/portfolio/assets/module_40_yfJvAIGtJ.c1gmnMu8.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/yfJvAIGtJ.c1gmnMu8.mjs'],
    ['/portfolio/assets/module_41_qQJxbtP7b.CASkETGL.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/qQJxbtP7b.CASkETGL.mjs'],
    ['/portfolio/assets/module_42_bcD8EgcQ1.BieXaXQv.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/bcD8EgcQ1.BieXaXQv.mjs'],
    ['/portfolio/assets/module_43_CJzsfgGqv.D2ohHtFR.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/CJzsfgGqv.D2ohHtFR.mjs'],
    ['/portfolio/assets/module_44_lErdxK2xX.biFr2EvO.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/lErdxK2xX.biFr2EvO.mjs'],
    ['/portfolio/assets/module_45_JFTXrh6U3.CkFNMVm5.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/JFTXrh6U3.CkFNMVm5.mjs'],
    ['/portfolio/assets/module_46_gx1IMWTvl.Briff6JV.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/gx1IMWTvl.Briff6JV.mjs'],
    ['/portfolio/assets/module_47_script_main.C1ZX83Lg.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/script_main.C1ZX83Lg.mjs'],
    // Also fix the main script that was downloaded earlier
    ['/portfolio/assets/script_24.mjs', 'https://framerusercontent.com/sites/SpdrvVEHpi9wg1eNYZpfw/script_main.C1ZX83Lg.mjs'],
  ];
  
  for (const [local, original] of replacements) {
    html = html.replace(new RegExp(local.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), original);
  }
  
  await fs.writeFile(HTML_FILE, html);
  console.log('✅ Fixed script references! Framer runtime scripts now load from CDN.');
  console.log('   Static assets (images, fonts, icons) remain local.');
}

fixScripts().catch(console.error);

