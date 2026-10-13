/* ------------------------------------------------------------------
   Where this activity sends its footprints.

   Tracking is off in the learner starter. The scenario works fully with
   an empty endpoint and key, whether opened from disk or served locally.

   To switch real tracking on, put your own row-insert address and public
   key here. For Supabase that is:

       endpoint: 'https://YOUR-PROJECT.supabase.co/rest/v1/course_events',
       key:      'YOUR-SUPABASE-ANON-PUBLIC-KEY'

   Only configure a learner-owned destination after deciding what data is
   needed, telling learners, and applying the destination's access rules.
   ------------------------------------------------------------------ */

window.ACTIVITY = {
  id: 'privacy-rounds',
  endpoint: '',
  key: ''
};
