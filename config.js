// إعدادات الصفحات — المفتاح ده «publishable» (عام): هو نفسه اللي جوّه
// التطبيق، والحماية الحقيقية في سياسات RLS على السيرفر. الصفحات بتنده
// `ecl_verify_certificate` بس (متاحة للكل بالتصميم: مفيش غير التوكن العشوائي).
window.EDARIO = {
  supabaseUrl: 'https://hfvxamzcrlvgoxmvnubm.supabase.co',
  publishableKey: 'sb_publishable_BKJPEROZ2Vx1NcZsXSYZpg_-CVGDL5h',
  appScheme: 'edario',
};

// يفتح التطبيق على نفس الرابط (بنفس الـquery والـhash). لو التطبيق مش
// متسطّب الموبايل بيفضل في الصفحة، والصفحة بتشرح المطلوب.
window.openEdarioApp = function (host) {
  var target = window.EDARIO.appScheme + '://' + host + '/' +
    window.location.search + window.location.hash;
  window.location.href = target;
  return target;
};

window.isMobile = function () {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};
