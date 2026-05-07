import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout, Plus, Image, MapPin, Calendar, Link2, ExternalLink, Trash2,
  CheckCircle, XCircle, Clock, Eye, Send, LogOut, Shield, ChevronRight,
  FileCheck, AlertTriangle, Sparkles, Edit3, X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useWorkshops } from '../context/WorkshopContext';
import { useNavigate } from 'react-router-dom';

const STATUS_CONFIG = {
  pending: { label: 'Draft', color: 'text-yellow-400', bg: 'bg-yellow-400/10', icon: Clock },
  qc_review: { label: 'QC Review', color: 'text-blue-400', bg: 'bg-blue-400/10', icon: FileCheck },
  approved: { label: 'Approved', color: 'text-emerald-400', bg: 'bg-emerald-400/10', icon: CheckCircle },
  published: { label: 'Published', color: 'text-[#FF7A00]', bg: 'bg-[#FF7A00]/10', icon: Sparkles },
  rejected: { label: 'Rejected', color: 'text-red-400', bg: 'bg-red-400/10', icon: XCircle },
};

const AdminPanel = () => {
  const { user, logout, isSuperAdmin } = useAuth();
  const { workshops, addWorkshop, deleteWorkshop, submitForQC, approveQC, rejectQC, publishWorkshop, rejectByAdmin, updateWorkshop } = useWorkshops();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('workshops');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [reviewNotes, setReviewNotes] = useState('');
  const [reviewingId, setReviewingId] = useState(null);
  const [previewId, setPreviewId] = useState(null);
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    title: '', date: '', location: '', googleFormLink: '', description: '', image: ''
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setForm({ ...form, image: reader.result });
    reader.readAsDataURL(file);
  };

  const handleSubmitWorkshop = (e) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.location) return;
    if (editingId) {
      updateWorkshop(editingId, { ...form });
      setEditingId(null);
    } else {
      addWorkshop({ ...form, submittedBy: user.name });
    }
    setForm({ title: '', date: '', location: '', googleFormLink: '', description: '', image: '' });
    setShowAddForm(false);
  };

  const startEdit = (ws) => {
    setForm({ title: ws.title, date: ws.date, location: ws.location, googleFormLink: ws.googleFormLink, description: ws.description, image: ws.image });
    setEditingId(ws.id);
    setShowAddForm(true);
  };

  const handleLogout = () => { logout(); navigate('/admin/login'); };

  const tabs = [
    { id: 'workshops', label: 'All Workshops', icon: Layout },
    { id: 'add', label: 'Add Workshop', icon: Plus },
    { id: 'qc', label: 'QC Review', icon: FileCheck, badge: workshops.filter(w => w.status === 'qc_review').length },
    ...(isSuperAdmin() ? [{ id: 'approval', label: 'Approval', icon: Shield, badge: workshops.filter(w => w.status === 'approved').length }] : []),
  ];

  const filteredWorkshops = activeTab === 'qc' ? workshops.filter(w => w.status === 'qc_review')
    : activeTab === 'approval' ? workshops.filter(w => w.status === 'approved')
      : workshops;

  const stats = [
    { label: 'Total', value: workshops.length, color: 'from-gray-600 to-gray-800' },
    { label: 'Published', value: workshops.filter(w => w.status === 'published').length, color: 'from-[#FF7A00] to-[#FF5500]' },
    { label: 'Pending QC', value: workshops.filter(w => w.status === 'qc_review').length, color: 'from-blue-500 to-blue-700' },
    { label: 'Awaiting Approval', value: workshops.filter(w => w.status === 'approved').length, color: 'from-emerald-500 to-emerald-700' },
  ];

  const previewWorkshop = previewId ? workshops.find(w => w.id === previewId) : null;

  return (
    <div className="min-h-screen bg-[#0B0B0F] pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-white flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A00] to-[#FF5500] rounded-xl flex items-center justify-center">
                <Shield size={20} className="text-white" />
              </div>
              Admin Panel
            </h1>
            <p className="text-gray-500 text-sm font-medium mt-1">Welcome back, <span className="text-[#FF7A00]">{user?.name}</span> · <span className="text-gray-600">{user?.role}</span></p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-gray-400 rounded-xl text-sm font-bold hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 transition-all">
            <LogOut size={16} /> Sign Out
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-[#16181D] border border-white/5 rounded-2xl p-5">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{s.label}</p>
              <p className={`text-3xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>{s.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => { setActiveTab(tab.id); if (tab.id === 'add') setShowAddForm(true); }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-[#FF7A00] text-[#0B0B0F] shadow-lg shadow-[#FF7A00]/20' : 'bg-[#16181D] text-gray-400 border border-white/5 hover:text-white'
                }`}>
              <tab.icon size={16} /> {tab.label}
              {tab.badge > 0 && <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-black">{tab.badge}</span>}
            </button>
          ))}
        </div>

        {/* Add/Edit Form Modal */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4" onClick={() => { setShowAddForm(false); setEditingId(null); }}>
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#16181D] border border-white/10 rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-black text-white">{editingId ? 'Edit Workshop' : 'Add New Workshop'}</h2>
                  <button onClick={() => { setShowAddForm(false); setEditingId(null); }} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-white"><X size={18} /></button>
                </div>
                <form onSubmit={handleSubmitWorkshop} className="space-y-5">
                  {/* Image Upload */}
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Workshop Image</label>
                    <div onClick={() => fileInputRef.current?.click()}
                      className="w-full h-48 bg-[#0B0B0F] border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-[#FF7A00]/30 transition-all overflow-hidden">
                      {form.image ? (
                        <img src={form.image} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <><Image size={32} className="text-gray-600 mb-2" /><p className="text-xs text-gray-600 font-medium">Click to upload image</p></>
                      )}
                    </div>
                    <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Title *</label>
                    <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required placeholder="Workshop title"
                      className="w-full bg-[#0B0B0F] border border-white/10 rounded-xl py-3.5 px-4 text-white text-sm font-medium placeholder:text-gray-600 focus:outline-none focus:border-[#FF7A00]/50 transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Date *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required
                          className="w-full bg-[#0B0B0F] border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-gray-500 text-sm font-medium focus:outline-none focus:border-[#FF7A00]/50 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Location *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} required placeholder="City, Country"
                          className="w-full bg-[#0B0B0F] border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white text-sm font-medium placeholder:text-gray-600 focus:outline-none focus:border-[#FF7A00]/50 transition-all" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Google Form Link</label>
                    <div className="relative">
                      <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input value={form.googleFormLink} onChange={e => setForm({ ...form, googleFormLink: e.target.value })} placeholder="https://forms.google.com/..."
                        className="w-full bg-[#0B0B0F] border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white text-sm font-medium placeholder:text-gray-600 focus:outline-none focus:border-[#FF7A00]/50 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Description</label>
                    <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={3} placeholder="Workshop description..."
                      className="w-full bg-[#0B0B0F] border border-white/10 rounded-xl py-3.5 px-4 text-white text-sm font-medium placeholder:text-gray-600 focus:outline-none focus:border-[#FF7A00]/50 transition-all resize-none" />
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button type="submit" className="flex-1 py-4 bg-gradient-to-r from-[#FF7A00] to-[#FF5500] text-white font-black rounded-xl text-sm hover:shadow-lg hover:shadow-[#FF7A00]/20 transition-all">
                      {editingId ? 'Update Workshop' : 'Create Workshop'}
                    </button>
                    <button type="button" onClick={() => { setShowAddForm(false); setEditingId(null); }} className="px-6 py-4 bg-white/5 border border-white/10 text-gray-400 font-bold rounded-xl text-sm hover:text-white transition-all">Cancel</button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Preview Modal */}
        <AnimatePresence>
          {previewWorkshop && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4" onClick={() => setPreviewId(null)}>
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
                className="bg-[#16181D] border border-white/10 rounded-[2rem] w-full max-w-lg p-8" onClick={e => e.stopPropagation()}>
                {previewWorkshop.image && <img src={previewWorkshop.image} alt={previewWorkshop.title} className="w-full h-48 object-cover rounded-2xl mb-6" />}
                <h2 className="text-2xl font-black text-white mb-3">{previewWorkshop.title}</h2>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-400 flex items-center gap-2"><Calendar size={14} className="text-[#FF7A00]" /> {new Date(previewWorkshop.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p className="text-sm text-gray-400 flex items-center gap-2"><MapPin size={14} className="text-[#FF7A00]" /> {previewWorkshop.location}</p>
                  {previewWorkshop.googleFormLink && <a href={previewWorkshop.googleFormLink} target="_blank" rel="noreferrer" className="text-sm text-[#FF7A00] flex items-center gap-2 hover:underline"><ExternalLink size={14} /> Registration Form</a>}
                </div>
                {previewWorkshop.description && <p className="text-sm text-gray-500 leading-relaxed">{previewWorkshop.description}</p>}
                <div className="mt-6 flex items-center gap-3">
                  {(() => { const sc = STATUS_CONFIG[previewWorkshop.status]; return (<span className={`px-3 py-1 rounded-full text-xs font-bold ${sc.bg} ${sc.color}`}>{sc.label}</span>); })()}
                  <span className="text-xs text-gray-600">by {previewWorkshop.submittedBy}</span>
                </div>
                <button onClick={() => setPreviewId(null)} className="w-full mt-6 py-3 bg-white/5 border border-white/10 text-gray-400 font-bold rounded-xl text-sm hover:text-white transition-all">Close</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Workshop Cards */}
        {filteredWorkshops.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-4"><Layout size={32} className="text-gray-600" /></div>
            <h3 className="text-lg font-bold text-gray-400 mb-2">No Workshops Found</h3>
            <p className="text-sm text-gray-600">Click "Add Workshop" to create your first workshop.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredWorkshops.map((ws, i) => {
              const sc = STATUS_CONFIG[ws.status];
              const StatusIcon = sc.icon;
              return (
                <motion.div key={ws.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  className="bg-[#16181D] border border-white/5 rounded-2xl overflow-hidden group hover:border-white/10 transition-all">
                  {/* Image */}
                  <div className="h-40 bg-[#0B0B0F] relative overflow-hidden">
                    {ws.image ? <img src={ws.image} alt={ws.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      : <div className="w-full h-full flex items-center justify-center"><Image size={40} className="text-gray-700" /></div>}
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${sc.bg} ${sc.color} backdrop-blur-sm`}>
                        <StatusIcon size={10} className="inline mr-1" />{sc.label}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-white font-bold text-lg mb-3 line-clamp-1">{ws.title}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-xs text-gray-500 flex items-center gap-2"><Calendar size={12} className="text-[#FF7A00]" />{new Date(ws.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-2"><MapPin size={12} className="text-[#FF7A00]" />{ws.location}</p>
                      {ws.googleFormLink && <p className="text-xs text-gray-500 flex items-center gap-2"><Link2 size={12} className="text-[#FF7A00]" />Form linked</p>}
                    </div>
                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                      <button onClick={() => setPreviewId(ws.id)} className="px-3 py-1.5 bg-white/5 text-gray-400 rounded-lg text-[11px] font-bold hover:text-white transition-all flex items-center gap-1"><Eye size={12} />View</button>
                      {ws.status === 'pending' && (
                        <>
                          <button onClick={() => startEdit(ws)} className="px-3 py-1.5 bg-white/5 text-gray-400 rounded-lg text-[11px] font-bold hover:text-white transition-all flex items-center gap-1"><Edit3 size={12} />Edit</button>
                          <button onClick={() => submitForQC(ws.id)} className="px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-[11px] font-bold hover:bg-blue-500/20 transition-all flex items-center gap-1"><Send size={12} />Submit QC</button>
                        </>
                      )}
                      {ws.status === 'qc_review' && (
                        <>
                          <button onClick={() => { setReviewingId(ws.id); setReviewNotes(''); approveQC(ws.id, 'Approved'); setReviewingId(null); }}
                            className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg text-[11px] font-bold hover:bg-emerald-500/20 transition-all flex items-center gap-1"><CheckCircle size={12} />Approve</button>
                          <button onClick={() => { rejectQC(ws.id, 'Rejected'); }}
                            className="px-3 py-1.5 bg-red-500/10 text-red-400 rounded-lg text-[11px] font-bold hover:bg-red-500/20 transition-all flex items-center gap-1"><XCircle size={12} />Reject</button>
                        </>
                      )}
                      {ws.status === 'approved' && isSuperAdmin() && (
                        <>
                          <button onClick={() => publishWorkshop(ws.id, 'Published by Super Admin')}
                            className="px-3 py-1.5 bg-[#FF7A00]/10 text-[#FF7A00] rounded-lg text-[11px] font-bold hover:bg-[#FF7A00]/20 transition-all flex items-center gap-1"><Sparkles size={12} />Publish</button>
                          <button onClick={() => rejectByAdmin(ws.id, 'Rejected by Super Admin')}
                            className="px-3 py-1.5 bg-red-500/10 text-red-400 rounded-lg text-[11px] font-bold hover:bg-red-500/20 transition-all flex items-center gap-1"><XCircle size={12} />Reject</button>
                        </>
                      )}
                      <button onClick={() => deleteWorkshop(ws.id)} className="px-3 py-1.5 bg-red-500/5 text-red-400/50 rounded-lg text-[11px] font-bold hover:bg-red-500/10 hover:text-red-400 transition-all flex items-center gap-1 ml-auto"><Trash2 size={12} /></button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Workflow Info */}
        <div className="mt-12 bg-[#16181D] border border-white/5 rounded-2xl p-6">
          <h3 className="text-sm font-black text-white mb-4">Workshop Approval Workflow</h3>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
            {['Draft', 'Submit QC', 'QC Review', 'Approved', 'Super Admin Publish'].map((step, i) => (
              <React.Fragment key={i}>
                <span className="px-4 py-2 bg-white/5 text-gray-400 rounded-xl">{step}</span>
                {i < 4 && <ChevronRight size={14} className="text-gray-600" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
