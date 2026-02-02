
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, Music, User, Link as LinkIcon, MessageSquare, ShieldCheck, Loader2, Disc } from 'lucide-react';
import { NeonButton } from  "../components/ui/NeonButton";

export const AddForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    url: '',
    description: '',
    genre: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/songs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          genre: formData.genre ? formData.genre.split(',').map(g => g.trim()).filter(g => g) : []
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit song');
      }

      setIsSubmitted(true);
      setFormData({ title: '', artist: '', url: '', description: '', genre: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyles = "w-full bg-black/40 border border-white/10 p-4 font-mono text-sm text-white focus:outline-none focus:border-[#10b981]/50 transition-all rounded-sm uppercase tracking-widest placeholder:text-white/10";
  const labelStyles = "text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-2 group-focus-within:text-[#10b981] transition-colors";

  return (
    <div className="relative bg-white/[0.03] border border-white/10 p-6 md:p-12 backdrop-blur-md rounded-sm">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 20 }}
            onSubmit={handleSubmit}
            className="space-y-6 md:space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Title */}
              <div className="space-y-1 group">
                <label className={labelStyles}>
                  <span className="flex items-center gap-2 text-[9px] md:text-[10px]"><Music size={10}/> Sonic Identifier</span>
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="TRACK_TITLE"
                  className={inputStyles}
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                />
              </div>
              {/* Artist */}
              <div className="space-y-1 group">
                <label className={labelStyles}>
                  <span className="flex items-center gap-2 text-[9px] md:text-[10px]"><User size={10}/> Origin Artist</span>
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="SOURCE_NAME"
                  className={inputStyles}
                  value={formData.artist}
                  onChange={e => setFormData({...formData, artist: e.target.value})}
                />
              </div>
            </div>

            {/* URL - Optional */}
            <div className="space-y-1 group">
              <label className={labelStyles}>
                <span className="flex items-center gap-2 text-[9px] md:text-[10px]"><LinkIcon size={10}/> Data Link (Optional)</span>
              </label>
              <input 
                type="url" 
                placeholder="HTTPS://SIGNAL.SRC/..."
                className={inputStyles}
                value={formData.url}
                onChange={e => setFormData({...formData, url: e.target.value})}
              />
            </div>

            {/* Description */}
            <div className="space-y-1 group">
              <label className={labelStyles}>
                <span className="flex items-center gap-2 text-[9px] md:text-[10px]"><MessageSquare size={10}/> Atmospheric Profile</span>
              </label>
              <textarea 
                rows={4}
                placeholder="DESCRIBE_THE_TEXTURES_AND_VIBE..."
                className={`${inputStyles} resize-none`}
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              />
            </div>

            {/* Genre - Optional */}
            <div className="space-y-1 group">
              <label className={labelStyles}>
                <span className="flex items-center gap-2 text-[9px] md:text-[10px]"><Disc size={10}/> Frequency Type (Optional)</span>
              </label>
              <input 
                type="text" 
                placeholder="POP, ROCK, ELECTRONIC..."
                className={inputStyles}
                value={formData.genre}
                onChange={e => setFormData({...formData, genre: e.target.value})}
              />
              <span className="text-[8px] md:text-[9px] font-mono text-muted-foreground/50 uppercase tracking-wider">Separate multiple genres with commas</span>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono uppercase tracking-widest">
                {error}
              </div>
            )}

            <NeonButton 
              type="submit"
              disabled={isLoading}
              className="w-full h-14 md:h-16 bg-[#10b981] text-black hover:bg-white border-none shadow-[0_0_20px_rgba(57,255,20,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <><Loader2 size={16} className="mr-2 animate-spin" /> Transmitting...</>
              ) : (
                <><Zap size={16} className="mr-2" /> Initialize Transfer</>
              )}
            </NeonButton>
          </motion.form>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 text-center"
          >
            <div className="w-20 h-20 bg-[#10b981]/10 border border-[#10b981] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(57,255,20,0.2)]">
              <CheckCircle2 size={32} className="text-[#10b981]" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">Transfer Complete</h3>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest mb-10 max-w-xs mx-auto">
              Signal received and indexed. The archive curators will verify frequency compatibility shortly.
            </p>
            <NeonButton 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-[#10b981]/30 text-[#10b981] hover:bg-[#10b981]/5"
            >
              Submit New Signal
            </NeonButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
